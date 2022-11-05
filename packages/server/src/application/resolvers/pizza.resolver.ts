import { pizzaProvider } from '../providers';
import { CreatePizzaInput, DeletePizzaInput, Pizza, UpdatePizzaInput } from '../schema/types/schema';
import { Root } from '../schema/types/types';

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
    deletePizza: async (_: Root, args: { input: DeletePizzaInput }): Promise<string> => {
      return pizzaProvider.deletePizza(args.input.id);
    },

    updatePizza: async (_: Root, args: { input: UpdatePizzaInput }): Promise<Pizza> => {
      return pizzaProvider.updatePizza(args.input);
    },
  },
};

export { pizzaResolver };
