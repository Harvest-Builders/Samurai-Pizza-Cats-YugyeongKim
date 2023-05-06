import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloClientOptions,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';

import './index.css';
import { theme } from './theme/theme';

interface ProvidersProps {
  clientOptions?: Partial<ApolloClientOptions<NormalizedCacheObject>>;
}

const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql',
});

const Providers: React.FC<ProvidersProps> = ({ clientOptions = {}, children }) => (
  <React.StrictMode>
    <ApolloProvider
      client={
        new ApolloClient({
          link: httpLink,
          cache: new InMemoryCache({}),
          ...clientOptions,
        })
      }
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

export { Providers };
