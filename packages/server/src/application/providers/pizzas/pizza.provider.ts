import { Collection, ObjectId } from 'mongodb';
import { CreatePizzaInput, Pizza } from 'src/application/schema/types/schema';
import validateStringInputs from '../../../lib/string-validator';
import { PizzaDocument, toPizzaObject } from '../../../entities/pizza';
import { UpdatePizzaInput } from './pizza.provider.types';
import { ToppingDocument, toToppingObject } from '../../../entities/topping';
import { ToppingProvider } from '../toppings/topping.provider';

export class PizzaProvider {
  constructor(private pizzaCollection: Collection<PizzaDocument>, private toppingProvider: ToppingProvider) {}

  public async getPizzas(): Promise<Pizza[]> {
    const pizzas = await this.pizzaCollection.find().sort({ name: 1 }).toArray();
    return pizzas.map(toPizzaObject);
  }

  public async createPizza(input: CreatePizzaInput): Promise<Pizza> {
    const pizzas = await this.pizzaCollection.findOneAndUpdate(
      { _id: new ObjectId() },
      {
        $set: {
          ...input,
          toppingIds: input.toppingIds?.map((toppingId) => new ObjectId(toppingId)),
          updateAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        },
      },
      { upsert: true, returnDocument: 'after' }
    );

    if (!pizzas.value) {
      throw new Error(`Could not create the ${input.name} pizza`);
    }
    //const toppingIds = pizzas.value.toppingIds;

    // Regenerated toppingIdsArr no dupulicate toppingIds
    //const validatedToppingIdsArr = toppingIds.filter((id, index) => toppingIds.indexOf(id) === index);
    const pizza = {
      ...pizzas.value,
      //validatedToppingIdsArr
    };
    return toPizzaObject(pizza);
  }

  public async deletePizza(id: string): Promise<string> {
    const pizzaId = new ObjectId(id);

    const pizzaData = await this.pizzaCollection.findOneAndDelete({
      _id: pizzaId,
    });

    const pizza = pizzaData.value;

    if (!pizza) {
      throw new Error(`Could not delete the pizza`);
    }

    return id;
  }

  public async updatePizza(input: UpdatePizzaInput): Promise<Pizza> {
    const { id, name, description, toppingIds, imgSrc } = input;
    let pizza;
    //check empty strings or wonky fields being passed into our database
    if (name) validateStringInputs(name);
    //check if the toppings you are adding to pizzas exist.
    if (toppingIds) this.validateToppingInputs(toppingIds);

    const data = await this.pizzaCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...(name && { name: name }),
          ...(description && { description: description }),
          ...(toppingIds && { toppingIds: input.toppingIds?.map((toppingId) => new ObjectId(toppingId)) }),
          ...(imgSrc && { imgSrc: imgSrc }),
        },
      },
      { returnDocument: 'after' }
    );

    if (!data.value) {
      throw new Error(`Could not update the pizza`);
    }
    pizza = data.value;

    if (name) validateStringInputs(name);

    return toPizzaObject(pizza);
  }

  public async validateToppingInputs(toppingIds: string[]): Promise<void> {
    let toppings = await this.toppingProvider.getToppingsById(toppingIds);
    console.log(toppings);
    toppings.forEach((topping) => {
      if (!toppingIds.includes(topping.id)) {
        throw new Error("topping can't be found in toppingIds");
      } else {
        console.log('no error');
      }
    });
  }
}
