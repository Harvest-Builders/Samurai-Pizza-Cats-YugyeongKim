import { Topping } from '../toppings/topping.provider.types';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  toppings?: [Topping];
  imgSrc: string;
  priceCents?: number;
  toppingIds: string[];
}

export interface CreatePizzaInput {
  name: string;
  description: string;
  toppingIds?: string[];
  imgSrc: string;
}

export interface UpdatePizzaInput {
  id: string;
  name?: string | null;
  description?: string | null;
  toppingIds?: string[] | null;
  imgSrc?: string | null;
}
