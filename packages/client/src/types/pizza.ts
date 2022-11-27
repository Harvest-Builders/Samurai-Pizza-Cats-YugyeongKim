import { Topping } from './topping';

export interface Pizza {
  id: string;
  name?: string;
  description?: string;
  toppings?: Topping[];
  //toppingIds: string[];
  imgSrc?: string;
  priceCents?: number;
}

export interface GetPizzaResult {
  results: Pizza[];
  totalCount: number;
  hasNextPage: boolean;
  cursor: string;
}

export interface CursorResultsInput {
  limit: number;
  cursor: string;
}
