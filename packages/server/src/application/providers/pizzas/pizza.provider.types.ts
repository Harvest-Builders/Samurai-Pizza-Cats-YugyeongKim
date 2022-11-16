export interface Pizza {
  id: string;
  name: string;
  description: string;
  //toppings?: [Topping];
  toppingIds?: string[];
  imgSrc: string;
  priceCents?: number;
}

export interface CreatePizzaInput {
  name: string;
  description: string;
  toppingIds?: string[];
  imgSrc: string;
}

export interface UpdatePizzaInput {
  id: string;
  name?: string;
  description?: string;
  toppingIds?: string[];
  imgSrc?: string;
}
