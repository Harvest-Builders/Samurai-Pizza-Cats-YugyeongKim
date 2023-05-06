import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import express from 'express';
let session = require('express-session');
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const PORT = 4001;

const createApp = async (): Promise<void> => {
  const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    introspection: true,
    context: ({ req }: any) => ({ req }),
  });

  // Start the express package & enable cors
  const app = express();

  const corsOptions = {
    origin: true,
    credentials: true,
  };

  app.use(cors(corsOptions));

  // Pass in session auth middleware to express
  app.use(
    session({
      secret: `${process.env.SESSION_SECRET}`,
      resave: false, // Only resaves session w/ change
      saveUninitialized: false, // Don't assign a user a session til we give them data
    })
  );

  // Pass express in as the apollo middleware
  server.applyMiddleware({
    app,
    path: '/',
    cors: false,
  });

  app.listen({ port: PORT }, () => {
    console.log(`Server running at http://3.17.5.151:${PORT}${server.graphqlPath}`);
  });
};

createApp();
