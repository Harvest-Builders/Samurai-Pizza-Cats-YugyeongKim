import { ObjectId } from 'bson';
import { Pizza } from '../../src/application/schema/types/schema';
import { PizzaDocument } from '../../src/entities/pizza';

const createMockPizza = (data?: Partial<Pizza>): Pizza => {
  return {
    __typename: 'Pizza',
    id: new ObjectId().toHexString(),
    name: 'Cheese',
    description: 'Simple',
    imgSrc:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    toppings: [
      {
        __typename: 'Topping',
        id: 'test',
        name: 'test',
        priceCents: 100,
      },
    ],
    priceCents: 100,
    ...data,
  };
};

const createMockPizzaDocument = (data?: Partial<PizzaDocument>): PizzaDocument => {
  return {
    _id: new ObjectId(),
    name: 'Test',
    description: 'Test',
    imgSrc:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    toppingIds: ['test'],
    toppings: [
      {
        id: 'test',
        name: 'test',
        priceCents: 100,
      },
    ],
    priceCents: 100,
    ...data,
  };
};

export { createMockPizza, createMockPizzaDocument };
