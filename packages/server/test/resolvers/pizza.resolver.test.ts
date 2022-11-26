import { gql } from 'apollo-server-core';
import { pizzaResolver } from '../../src/application/resolvers/pizza.resolver';
import { pizzaProvider } from '../../src/application/providers';
import { typeDefs } from '../../src/application/schema/index';
import {
  MutationCreatePizzaArgs,
  MutationDeletePizzaArgs,
  MutationUpdatePizzaArgs,
} from '../../src/application/schema/types/schema';

import { createMockPizza } from '../helpers/pizza.helper';
import { TestClient } from '../helpers/client.helper';
import { ObjectId } from 'bson';

let client: TestClient;

jest.mock('../../src/application/database', () => ({
  setupDb: (): any => ({ collection: (): any => jest.fn() }),
}));

const mockPizza = createMockPizza();

const Pizza_id = {
  id: new ObjectId().toHexString(),
};

beforeAll(async (): Promise<void> => {
  client = new TestClient(typeDefs, pizzaResolver);
});

beforeEach(async (): Promise<void> => {
  jest.restoreAllMocks();
});

describe('pizzaResolver', () => {
  describe('Query', () => {
    describe('pizzas', () => {
      const query = gql`
        query getPizzas {
          pizzas {
            id
            name
            description
            imgSrc
            toppings {
              id
              name
              priceCents
            }
            priceCents
          }
        }
      `;

      it('should get all Pizzas', async () => {
        jest.spyOn(pizzaProvider, 'getPizzas').mockResolvedValue([mockPizza]);

        const result = await client.query({ query });

        expect(result.data).toEqual({
          pizzas: [
            {
              __typename: 'Pizza',
              id: mockPizza.id,
              name: mockPizza.name,
              description: mockPizza.description,
              imgSrc: mockPizza.imgSrc,
              toppings: mockPizza.toppings,
              priceCents: mockPizza.priceCents,
            },
          ],
        });
        expect(pizzaProvider.getPizzas).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Mutation', () => {
    describe('createPizza', () => {
      const mutation = gql`
        mutation ($input: CreatePizzaInput!) {
          createPizza(input: $input) {
            name
            description
            imgSrc
            priceCents
            toppings {
              id
              name
              priceCents
            }
          }
        }
      `;

      const validPizza = createMockPizza({
        name: 'Cheese',
        description: 'Simple',
        imgSrc:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      });

      beforeEach(() => {
        jest.spyOn(pizzaProvider, 'createPizza').mockResolvedValue(validPizza);
      });

      it('should call create pizza when passed a valid input', async () => {
        const variables: MutationCreatePizzaArgs = {
          input: {
            name: validPizza.name,
            description: validPizza.description,
            imgSrc: validPizza.imgSrc,
            toppingIds: ['test'],
          },
        };

        await client.mutate({ mutation, variables });

        expect(pizzaProvider.createPizza).toHaveBeenCalledWith(variables.input);

        const result = await client.mutate({ mutation, variables });

        expect(result.data).toEqual({
          createPizza: {
            __typename: 'Pizza',
            name: mockPizza.name,
            description: mockPizza.description,
            imgSrc: mockPizza.imgSrc,
            toppings: mockPizza.toppings,
            priceCents: mockPizza.priceCents,
          },
        });
      });
    });
  });

  describe('deletePizza', () => {
    const mutation = gql`
      mutation ($input: DeletePizzaInput!) {
        deletePizza(input: $input)
      }
    `;

    const variables: MutationDeletePizzaArgs = { input: { id: mockPizza.id } };

    beforeEach(() => {
      jest.spyOn(pizzaProvider, 'deletePizza').mockResolvedValue(mockPizza.id);
    });

    test('should call deletePizza with id', async () => {
      await client.mutate({ mutation, variables });

      expect(pizzaProvider.deletePizza).toHaveBeenCalledWith(mockPizza.id);
    });

    test('should return deleted Pizza id', async () => {
      const result = await client.mutate({ mutation, variables });

      expect(result.data).toEqual({
        deletePizza: mockPizza.id,
      });
    });
  });

  describe('updatePizza', () => {
    const mutation = gql`
      mutation ($input: UpdatePizzaInput!) {
        updatePizza(input: $input) {
          id
          name
          description
          imgSrc
          toppings {
            id
            name
            priceCents
          }
          priceCents
        }
      }
    `;
    //expect
    const updatePizza = createMockPizza({
      id: mockPizza.id,
      name: 'update pizza',
      description: 'update pizza',
      imgSrc: 'update pizza',
    });
    const variables: MutationUpdatePizzaArgs = {
      input: {
        id: mockPizza.id,
        name: updatePizza.name,
        description: updatePizza.description,
        imgSrc: updatePizza.imgSrc,
      },
    };
    beforeEach(() => {
      jest.spyOn(pizzaProvider, 'updatePizza').mockResolvedValue(updatePizza);
    });

    it('should call updatePIzza with input', async () => {
      await client.mutate({ mutation, variables });
      expect(pizzaProvider.updatePizza).toHaveBeenCalledWith(variables.input);
    });

    it('should return updated pizza', async () => {
      const result = await client.mutate({ mutation, variables });

      expect(result.data).toEqual({
        updatePizza: {
          ...updatePizza,
        },
      });
    });
  });
});
