import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { createStyles, Theme } from '@material-ui/core';
import { Pizza } from '../../types';
import PizzaItem from './PizzaItem';
import { GET_PIZZAS } from '../../hooks/graphql/pizzas/queries/get-pizzas';
import SelectPizza from './SelectPizza';

const useStyles = makeStyles(({ typography }: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    skeleton: {
      display: 'flex',
      justifyContent: 'center',
      verticalAlign: 'center',
    },
    pizzaBox: {},
  })
);

const PizzasList: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedPizza, setselectedPizza] = React.useState<Partial<Pizza>>();
  const { loading, error, data } = useQuery(GET_PIZZAS);

  if (loading) {
    return <div className={classes.skeleton}>Pizza List Loading ...</div>;
  }
  //When receiving an error, you should display its message to the user.
  if (error) {
    alert('error');
  }
  console.log(error);
  const handleOpen = (pizza?: Pizza): void => {
    setselectedPizza(pizza);
    setOpen(true);
  };
  const pizzaList = data?.pizzas.map((pizza: Pizza) => (
    <PizzaItem data-testid={`pizza-item-${pizza?.id}`} key={pizza?.id} handleOpen={handleOpen} pizza={pizza} />
  ));
  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <PizzaItem key="add-pizza" handleOpen={handleOpen} />
        {pizzaList}
      </div>
      <SelectPizza selectedPizza={selectedPizza} setSelectedPizza={setselectedPizza} open={open} setOpen={setOpen} />
    </Container>
  );
};

export default PizzasList;
