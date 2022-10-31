import { Collection, ObjectId } from 'mongodb';
import { CreatePizzaInput } from 'src/application/schema/types/schema';
import { PizzaDocument, toPizzaObject } from '../../../entities/pizza';
import { Pizza } from './pizza.provider.types';

type omitPriceCentsPizza = Omit<Pizza, 'priceCents'>;
export class PizzaProvider {
  constructor(private pizzaCollection: Collection<PizzaDocument>) {}

  public async getPizzas(): Promise<Pizza[]> {
    const pizzas = await this.pizzaCollection.find().sort({ name: 1 }).toArray();
    return pizzas.map(toPizzaObject);
  }

  public async createPizza(input: CreatePizzaInput): Promise<Pizza> {
    const pizzas = await this.pizzaCollection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $set: { ...input, updateAt: new Date().toISOString(), createdAt: new Date().toISOString() } },
      { upsert: true, returnDocument: 'after' }
    );

    if (!pizzas.value) {
      throw new Error(`Could not create the ${input.name} topping`);
    }

    console.log(pizzas.value);
    const pizza = pizzas.value;
    return toPizzaObject(pizza);
  }
}
