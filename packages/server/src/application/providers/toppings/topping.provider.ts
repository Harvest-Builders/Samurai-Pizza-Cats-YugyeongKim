import { ObjectId, Collection } from 'mongodb';
import { ToppingDocument, toToppingObject } from '../../../entities/topping';
import { CreateToppingInput, Topping, UpdateToppingInput } from './topping.provider.types';
import validateStringInputs from '../../../lib/string-validator';

class ToppingProvider {
  constructor(private collection: Collection<ToppingDocument>) {}

  public async getToppings(): Promise<Topping[]> {
    const toppings = await this.collection.find().sort({ name: 1 }).toArray();
    return toppings.map(toToppingObject);
  }
  //topping.provider.ts
  public async getToppingsById(toppingIds: string[] | undefined): Promise<Topping[]> {
    const toppingsById = await this.collection
      .find(
        //The following operation uses the $in operator to return documents in the bios collection
        //where _id equals either 5 or ObjectId("507c35dd8fada716c89d0013"):
        { _id: { $in: toppingIds } }
      )
      .sort({ name: 1 })
      .toArray();
    return toppingsById.map(toToppingObject);
  }

  public async getPriceCents(toppingIds: string[] | undefined): Promise<Number> {
    let prices = 0;
    await this.collection.find({ _id: { $in: toppingIds } }).forEach(function (topping) {
      prices += topping.priceCents;
    });
    return prices;
  }

  public async createTopping(input: CreateToppingInput): Promise<Topping> {
    const data = await this.collection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $set: { ...input, updatedAt: new Date().toISOString(), createdAt: new Date().toISOString() } },
      { upsert: true, returnDocument: 'after' }
    );

    if (!data.value) {
      throw new Error(`Could not create the ${input.name} topping`);
    }
    const topping = data.value;

    return toToppingObject(topping);
  }

  public async deleteTopping(id: string): Promise<string> {
    const toppingId = new ObjectId(id);

    const toppingData = await this.collection.findOneAndDelete({
      _id: toppingId,
    });

    const topping = toppingData.value;

    if (!topping) {
      throw new Error(`Could not delete the topping`);
    }

    return id;
  }

  public async updateTopping(input: UpdateToppingInput): Promise<Topping> {
    const { id, name, priceCents } = input;

    if (!validateStringInputs(input)) {
      throw new Error(`empty string is not valid`);
    }

    const data = await this.collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...(name && { name: name }), ...(priceCents && { priceCents: priceCents }) } },
      { returnDocument: 'after' }
    );

    if (!data.value) {
      throw new Error(`Could not update the topping`);
    }
    const topping = data.value;

    return toToppingObject(topping);
  }
}

export { ToppingProvider };
