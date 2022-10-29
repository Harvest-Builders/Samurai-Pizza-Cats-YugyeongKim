import React from 'react';
import { Container } from '@material-ui/core';

import PageHeader from '../common/PageHeader';
import PizzasList from './PizzaList';

const Pizzas: React.FC = () => {
  return (
    <Container maxWidth="md">
      <PageHeader pageHeader={'Under construction'} />
      <PizzasList />
    </Container>
  );
};

export default Pizzas;
