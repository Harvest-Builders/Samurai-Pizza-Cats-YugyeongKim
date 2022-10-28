import { IconButton, ListItem, Theme } from '@material-ui/core';
import { AddCircle, Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

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

const ToppingItem: React.FC<PizzaItemProps> = ({ pizza, handleOpen, ...props }) => {
  const classes = useStyles();

  return (
    <ListItem {...props} className={classes.container}>
      <p data-testid={`pizza-name-${pizza?.id}`} className={classes.name}>
        {pizza?.name ?? 'Add pizza'}
      </p>
      <div className={classes.right}>
        <IconButton edge="end" aria-label="modify" type="button" onClick={(): void => handleOpen(pizza)}>
          {pizza ? <Edit /> : <AddCircle />}
        </IconButton>
      </div>
    </ListItem>
  );
};

export default ToppingItem;