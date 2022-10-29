import { Topping } from '../../providers/toppings/topping.provider.types';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  toppings: [Topping];
  toppingIds: [Topping];
  imgSrc: string;
  priceCents: number;
}
