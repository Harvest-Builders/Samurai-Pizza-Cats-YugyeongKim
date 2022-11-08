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
import { ClientCommand } from 'apollo';

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
    describe('getPizzas', () => {
      const query = gql`
        query getPizzas {
          pizzas {
            id
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

      it('should get all Pizzas', async () => {
        //Creates a mock function similar to jest.fn but also tracks calls to object[methodName].
        //Returns a Jest mock function.
        //Jest’s spyOn method is used to spy on a method call on an object. It is also very beneficial
        //in cases where the Jest mock module or mock function might not be the best tool for the fn
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
              priceCents: mockPizza.priceCents,
              toppings: mockPizza.toppings,
            },
          ],
        });
        expect(pizzaProvider.getPizzas).toHaveBeenCalledTimes(1);
      });
    });
  });
});
