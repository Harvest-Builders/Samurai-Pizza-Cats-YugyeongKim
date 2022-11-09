import { Collection } from 'mongodb';
import { PizzaDocument, toPizzaObject } from '../../../entities/pizza';
import { Pizza } from './pizza.provider.types';

export class PizzaProvider {
  constructor(private pizzaCollection: Collection<PizzaDocument>) {}

  public async getPizzas(): Promise<Pizza[]> {
    const pizzas = await this.pizzaCollection.find().sort({ name: 1 }).toArray();
    return pizzas.map(toPizzaObject);
  }
}
