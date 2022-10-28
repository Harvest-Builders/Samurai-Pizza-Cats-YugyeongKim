import React from 'react';
import { Container } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { createStyles, List, ListItem, Theme } from '@material-ui/core';
import PageHeader from '../common/PageHeader';
import { Pizza } from '../../types/pizza';
import PizzaItem from './PizzaItem';

const useStyles = makeStyles(({ typography }: Theme) =>
  createStyles({
    container: {
      minWidth: typography.pxToRem(650),
    },
    skeleton: {
      display: 'flex',
      justifyContent: 'center',
      verticalAlign: 'center',
    },
    header: {
      display: 'flex',
    },
    name: {
      minWidth: typography.pxToRem(500),
    },
    right: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    },
  })
);

const Pizzas: React.FC = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_PIZZAS);
  const [open, setOpen] = React.useState(false);
  const [selectedTopping, setSelectedTopping] = React.useState<Partial<Pizza>>();

  console.log(data);

  const handleOpen = (pizza?: Pizza): void => {
    setSelectedTopping(pizza);
    setOpen(true);
  };

  if (loading) {
    return <div className={classes.skeleton}>Loading ...</div>;
  }

  const pizzaList = data?.pizzas.map((pizza: Pizza) => (
    <PizzaItem
      data-testid={`topping-item-${pizza?.id}`}
      key={pizza.id.toString()}
      handleOpen={handleOpen}
      pizza={pizza}
    />
  ));
  return (
    <Container maxWidth="md">
      <PageHeader pageHeader={'Pizzas'} />
      <List className={classes.container}>
        <ListItem className={classes.header}>
          <h2 className={classes.name}>Pizza</h2>
          <div className={classes.right}>
            <h2>Price</h2>
            <h2>Modify</h2>
          </div>
        </ListItem>
        <PizzaItem key="add-pizza" handleOpen={handleOpen} />
        {pizzaList}
      </List>
    </Container>
  );
};

export default Pizzas;
