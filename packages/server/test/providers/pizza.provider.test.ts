import { Collection } from 'mongodb';
import { reveal, stub } from 'jest-auto-stub';
import { ToppingProvider } from '../../src/application/providers/toppings/topping.provider';
import { PizzaProvider } from '../../src/application/providers/pizzas/pizza.provider';
import { mockSortToArray } from '../helpers/mongo.helper';
import { PizzaDocument, toPizzaObject } from '../../src/entities/pizza';
import { ToppingDocument } from '../../src/entities/topping';
import { createMockPizzaDocument } from '../helpers/pizza.helper';
import { createMockToppingDocument } from '../helpers/topping.helper';

const stubPizzaCollection = stub<Collection<PizzaDocument>>();
const stubToppingCollection = stub<Collection<ToppingDocument>>();
const toppingProvider = new ToppingProvider(stubToppingCollection);
const pizzaProvider = new PizzaProvider(stubPizzaCollection);

beforeEach(jest.clearAllMocks);

describe('pizzaProvider', (): void => {
  const mockPizzaDocument = createMockPizzaDocument();
  const mockPizza = toPizzaObject(mockPizzaDocument);

  describe('getPizzas', (): void => {
    beforeEach(() => {
      reveal(stubPizzaCollection).find.mockImplementation(mockSortToArray([mockPizzaDocument]));
    });

    test('should call find once', async () => {
      await pizzaProvider.getPizzas();
      expect(stubPizzaCollection.find).toHaveBeenCalledTimes(1);
    });

    test('should get all pizzas', async () => {
      const result = await pizzaProvider.getPizzas();

      expect(result).toEqual([mockPizza]);
    });
  });

  describe('createPizza', (): void => {
    const testPizzaData = {
      name: 'create pizza',
      description: 'create description',
      imgSrc: 'create image',
      toppingIds: ['a70b4a6ed7a09da8f7cd38af'],
    };

    const validPizza = createMockPizzaDocument(testPizzaData);
    const validTopping = createMockToppingDocument({ name: 'test topping', priceCents: 300 });
    beforeEach(() => {
      reveal(stubPizzaCollection).findOneAndUpdate.mockImplementation(() => ({ value: validPizza }));
      reveal(stubToppingCollection).find.mockImplementation(mockSortToArray([validTopping]));
    });

    test('should call findOneAndUpdate once', async () => {
      await pizzaProvider.createPizza(testPizzaData);
      expect(stubPizzaCollection.findOneAndUpdate).toHaveBeenCalledTimes(1);
    });
    test('should return a pizza when passed valid input', async () => {
      const result = await pizzaProvider.createPizza(testPizzaData);
      expect(result).toEqual(toPizzaObject(validPizza));
    });
  });

  describe('deletePizza', (): void => {
    beforeEach(() => {
      reveal(stubPizzaCollection).findOneAndDelete.mockImplementation(() => ({ value: mockPizzaDocument }));
    });
    test('should call findOneAndDelete once', async () => {
      await pizzaProvider.deletePizza(mockPizza.id);
      expect(stubPizzaCollection.findOneAndDelete).toHaveBeenCalledTimes(1);
    });
    test('should throw an error if findOneAndDelete returns null for value', async () => {
      reveal(stubPizzaCollection).findOneAndDelete.mockImplementation(() => ({ value: null }));
      await expect(pizzaProvider.deletePizza(mockPizza.id)).rejects.toThrow(new Error('Could not delete the pizza'));
    });
    test('should return an id', async () => {
      const result = await pizzaProvider.deletePizza(mockPizza.id);
      expect(result).toEqual(mockPizza.id);
    });
  });

  describe('updatePizza', (): void => {
    const testPizzaData = {
      name: 'test pizza',
      description: 'test description',
      imgSrc: 'test image',
      toppingIds: ['a70b4a6ed7a09da8f7cd38af'],
    };
    const validPizza = createMockPizzaDocument(testPizzaData);

    beforeEach(() => {
      reveal(stubPizzaCollection).findOneAndUpdate.mockImplementation(() => ({ value: validPizza }));
    });

    test('should call findOneAndUpdate once', async () => {
      await pizzaProvider.updatePizza({
        id: validPizza.id,
        ...validPizza,
      });

      expect(stubPizzaCollection.findOneAndUpdate).toHaveBeenCalledTimes(1);
    });

    test('should return a Pizza', async () => {
      const result = await pizzaProvider.updatePizza({
        id: validPizza.id,
        ...validPizza,
      });
      expect(result).toEqual(toPizzaObject(validPizza));
    });
  });
});