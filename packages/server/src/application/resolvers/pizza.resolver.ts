import { omit } from 'lodash';
import { pizzas } from 'scripts/initial-data';
import { pizzaProvider, toppingProvider } from '../providers';
import { CreatePizzaInput, Pizza, Topping } from '../schema/types/schema';
import { Root } from '../schema/types/types';

type omitPriceCentsPizza = Omit<Pizza, 'priceCents'>;
const pizzaResolver = {
  Query: {
    pizzas: async (): Promise<Pizza[]> => {
      return await pizzaProvider.getPizzas();
    },
  },
  Mutation: {
    createPizza: async (_: Root, args: { input: CreatePizzaInput }): Promise<Pizza> => {
      return await pizzaProvider.createPizza(args.input);
    },
  },
};

export { pizzaResolver };
