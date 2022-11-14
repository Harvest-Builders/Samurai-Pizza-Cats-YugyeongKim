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

let client: TestClient;

jest.mock('../../src/application/database', () => ({
  setupDb: (): any => ({ collection: (): any => jest.fn() }),
}));

const mockPizza = createMockPizza();

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
            toppingIds
            priceCents
            toppings {
              id
              name
              priceCents
            }
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
              toppingIds: mockPizza.toppingIds,
              priceCents: mockPizza.priceCents,
              toppings: mockPizza.toppings,
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
            toppingIds
          }
        }
      `;

      const validPizza = createMockPizza({
        name: 'Cheese',
        description: 'Simple',
        imgSrc:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        toppingIds: ['a70b4a6ed7a09da8f7cd38af'],
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
            toppingIds: validPizza.toppingIds,
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
            toppingIds: mockPizza.toppingIds,
          },
        });
      });
    });
  });

  describe('deletePIzza', () => {
    const mutation = gql`
      mutation ($input: DeletePizzaInput!) {
        deletePizza(input: $input)
      }
    `;

    const variables: MutationDeletePizzaArgs = { input: { id: mockPizza.id } };

    beforeEach(() => {
      jest.spyOn(pizzaProvider, 'deletePizza').mockResolvedValue(mockPizza.id);
    });

    it('should call deletePizza with id', async () => {
      await client.mutate({ mutation, variables });

      expect(pizzaProvider.deletePizza).toHaveBeenCalledWith(variables.input.id);
    });

    it('should return deleted pizza id', async () => {
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
          priceCents
          toppingIds
          toppings {
            id
            name
            priceCents
          }
        }
      }
    `;
    //expect
    const updatePizza = createMockPizza({
      name: 'test pizza',
      description: 'test pizza',
      imgSrc: 'test pizza',
      toppingIds: ['a70b4a6ed7a09da8f7cd38af'],
      priceCents: 250,
      toppings: [
        {
          __typename: 'Topping',
          id: 'a70b4a6ed7a09da8f7cd38af',
          name: 'update Sauce',
          priceCents: 250,
        },
      ],
    });
    const variables: MutationUpdatePizzaArgs = {
      input: {
        id: mockPizza.id,
        name: updatePizza.name,
        description: updatePizza.description,
        imgSrc: updatePizza.imgSrc,
        toppingIds: updatePizza.toppings,
        toppings: updatePizza.toppings,
        priceCents: updatePizza.priceCents,
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
