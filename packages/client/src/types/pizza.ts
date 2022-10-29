import { Topping } from './topping';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  toppings: [Topping];
  toppingIds: [Topping];
  imgSrc: string;
  priceCents: number;
}
