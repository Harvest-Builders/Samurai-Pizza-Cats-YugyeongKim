import { pizzas } from 'scripts/initial-data';
import { pizzaProvider, toppingProvider } from '../providers';
import { Pizza, Topping } from '../schema/types/schema';

const pizzaResolver = {
  Query: {
    pizzas: async (): Promise<Pizza[]> => {
      return await pizzaProvider.getPizzas();
    },
  },
};

export { pizzaResolver };
