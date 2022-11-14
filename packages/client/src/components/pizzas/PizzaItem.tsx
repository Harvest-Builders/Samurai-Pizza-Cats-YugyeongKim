import { IconButton, ListItem, Theme } from '@material-ui/core';
import { AddCircle, Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import toDollars from '../../lib/format-dollars';
import { Pizza } from '../../types/pizza';

const useStyles = makeStyles(({ typography }: Theme) => ({
  container: {
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
}));

export interface PizzaItemProps {
  pizza?: Pizza;
  handleOpen: (pizza?: Pizza) => void;
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza, handleOpen, ...props }) => {
  const classes = useStyles();

  return (
    /**
     * Make a PizzaItem component that displays each field you
     * receive for a pizza inside the common CardItem component.
     * When data is received you should map over it.
     */
    <ListItem {...props} className={classes.container}>
      <p data-testid={`pizza-name-${pizza?.id}`} className={classes.name}>
        {pizza?.name}
      </p>
      <div className={classes.right}>
        <img src={`${pizza?.imgSrc}`} width="100vw" />
        <p data-testid={`pizza-price-${pizza?.id}`}>{pizza?.priceCents ? toDollars(pizza.priceCents) : ''}</p>
        <IconButton edge="end" aria-label="modify" type="button" onClick={(): void => handleOpen(pizza)}>
          {pizza ? <Edit /> : <AddCircle />}
        </IconButton>
      </div>
    </ListItem>
  );
};

export default PizzaItem;
