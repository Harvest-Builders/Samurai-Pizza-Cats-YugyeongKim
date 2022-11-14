import { gql } from 'apollo-server';

const typeDefs = gql`
  type Pizza {
    id: ObjectID!
    name: String!
    description: String!
    toppings: [Topping]
    toppingIds: [String]
    imgSrc: String!
    priceCents: Int
  }

  type Query {
    pizzas: [Pizza!]!
  }

  input PizzaQueryArgs {
    id: ObjectID!
  }

  type Mutation {
    createPizza(input: CreatePizzaInput): Pizza!
    deletePizza(input: DeletePizzaInput): ObjectID!
    updatePizza(input: UpdatePizzaInput): Pizza!
  }

  input CreatePizzaInput {
    name: String!
    description: String!
    imgSrc: String!
    toppings: [ObjectID]
    toppingIds: [ObjectID]
    priceCents: Int
  }

  input DeletePizzaInput {
    id: ObjectID!
  }

  input UpdatePizzaInput {
    id: ObjectID!
    name: String!
    description: String!
    toppings: [ObjectID]
    toppingIds: [ObjectID]
    imgSrc: String!
    priceCents: Int
  }
`;

export { typeDefs };
