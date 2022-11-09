import { gql } from '@apollo/client';

const GET_PIZZAS = gql`
  query Pizzas {
    pizzas {
      id
      name
      description
      toppings {
        id
        name
        priceCents
      }
      imgSrc
      priceCents
    }
  }
`;

export { GET_PIZZAS };
