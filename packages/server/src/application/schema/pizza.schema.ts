import { gql } from 'apollo-server';

const typeDefs = gql`
  type Pizza {
    id: ObjectID!
    name: String!
    description: String!
    toppings: [Topping]
    toppingIds: [Topping]
    imgSrc: String!
    priceCents: Int
  }

  type Query {
    pizzas: [Pizza!]!
  }

  input PizzaQueryArgs {
    id: ObjectID!
  }
`;

export { typeDefs };
