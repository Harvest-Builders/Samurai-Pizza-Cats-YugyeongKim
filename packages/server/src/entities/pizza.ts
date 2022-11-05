import { Document } from 'mongodb';
import { Pizza } from '../application/providers/pizzas/pizza.provider.types';

interface PizzaDocument extends Document, Omit<Pizza, 'id'>, Omit<Pizza, 'priceCents'> {}

const toPizzaObject = (pizza: PizzaDocument): Pizza => {
  return {
    id: pizza._id.toHexString(),
    name: pizza.name,
    description: pizza.description,
    toppings: pizza.toppings,
    toppingIds: pizza.toppingIds,
    imgSrc: pizza.imgSrc,
    priceCents: pizza.priceCents,
  };
};

export { PizzaDocument, toPizzaObject };
