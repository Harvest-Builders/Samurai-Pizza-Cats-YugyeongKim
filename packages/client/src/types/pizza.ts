import { Topping } from './schema';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  toppings: [Topping];
  toppingIds: [Topping];
  imgSrc: string;
}
