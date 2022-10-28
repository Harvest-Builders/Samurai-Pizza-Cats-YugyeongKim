import React from 'react';
import { AddCircle, Delete } from '@material-ui/icons';
import {
  Backdrop,
  createStyles,
  Fade,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Theme,
} from '@material-ui/core';

import usePizzaMutations from '../../hooks/pizza/use-pizza-mutations';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

interface PizzaModalProps {
  selectedPizza?: any;
  setSelectedPizza: React.Dispatch<React.SetStateAction<any>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PizzaModal = ({ selectedPizza, setSelectedPizza, open, setOpen }: PizzaModalProps): JSX.Element => {
  const classes = useStyles();
  //const { onCreateTopping, onDeleteTopping, onUpdateTopping } = usePizzaMutations();
  console.log('pizzaModal test');
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={(): void => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <h2>{selectedPizza ? 'Edit' : 'Add'} Topping</h2>
          {/*
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="name-input"
              label="Topping Name"
              defaultValue={selectedPizza?.name}
              onChange={(event): void => setSelectedPizza({ ...selectedPizza, name: event.target.value })}
            />
            <TextField
              id="price-input"
              label="Topping Price in Cents"
              type="number"
              defaultValue={selectedPizza?.priceCents}
              onChange={(event): void =>
                setSelectedPizza({ ...selectedPizza, priceCents: parseInt(event.target.value) })
              }
            />
            
            <IconButton
              edge="end"
              aria-label="update"
              type="button"
              onClick={(): void => {
                selectedTopping?.id ? onUpdateTopping(selectedTopping) : onCreateTopping(selectedTopping);
                setOpen(false);
              }}
            >
              <AddCircle />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              type="button"
              onClick={(): void => {
                onDeleteTopping(selectedTopping);
                setOpen(false);
              }}
            > 
              <Delete />
            </IconButton>
            
          </form>
          */}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default PizzaModal;
