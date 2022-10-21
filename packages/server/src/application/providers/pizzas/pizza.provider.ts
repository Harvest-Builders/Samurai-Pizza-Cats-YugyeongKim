import { Collection } from 'mongodb';
import { PizzaDocument, toPizzaObject } from '../../../entities/pizza';
import { Pizza } from './pizza.provider.types';

export class PizzaProvider {
  constructor(private collection: Collection<PizzaDocument>) {}

  async getPizzas(): Promise<Pizza[]> {
    const pizzas = await this.collection.find().sort({ name: 1 }).toArray();
    return pizzas.map(toPizzaObject);
  }
}
