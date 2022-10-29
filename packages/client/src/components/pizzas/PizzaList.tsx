import React from 'react';
import { Container } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { createStyles, List, ListItem, Theme } from '@material-ui/core';
import PageHeader from '../common/PageHeader';
import { Pizza } from '../../types/pizza';
import PizzaItem from './PizzaItem';
import { GET_PIZZAS } from '../../hooks/graphql/pizzas/queries/get-pizzas';

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

const PizzasList: React.FC = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_PIZZAS);
  const [open, setOpen] = React.useState(false);
  const [selectedTopping, setSelectedTopping] = React.useState<Partial<Pizza>>();

  const handleOpen = (pizza?: Pizza): void => {
    setSelectedTopping(pizza);
    setOpen(true);
  };

  if (loading) {
    return <div className={classes.skeleton}>Pizza List Loading ...</div>;
  }
  //When receiving an error, you should display its message to the user.
  if (error) {
    alert('error');
  }

  const pizzaList = data?.pizzas.map((pizza: Pizza) => (
    <PizzaItem
      data-testid={`pizza-list-${pizza?.id}`}
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
          <div className={classes.right}></div>
        </ListItem>
        <PizzaItem key="add-pizza" handleOpen={handleOpen} />
        {pizzaList}
      </List>
    </Container>
  );
};

export default PizzasList;
