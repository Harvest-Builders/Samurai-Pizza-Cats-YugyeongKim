import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Backdrop, createStyles, Fade, makeStyles, Modal, Paper, TextField, Theme } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { GET_TOPPINGS } from '../../hooks/graphql/topping/queries/get-toppings';
import { useQuery } from '@apollo/client';
import usePizzaMutations from '../../hooks/pizza/use-pizza-mutations';
import defaultPizza from '../../assets/img/default-pizza.jpeg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    skeleton: {
      display: 'flex',
      justifyContent: 'center',
      verticalAlign: 'center',
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    pizzaImgDefault: {
      width: '20vw',
    },
  })
);

interface PizzaModalProps {
  selectedPizza?: any;
  setSelectedPizza: React.Dispatch<React.SetStateAction<any>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ItoppingNameList {
  id: string;
  value: string;
  label: string;
}

const PizzaModal = ({ selectedPizza, setSelectedPizza, open, setOpen }: PizzaModalProps): JSX.Element => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { onCreatePizza, onDeletePizza, onUpdatePizza } = usePizzaMutations();

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    description: yup.string().required('Required'),
    imgSrc: yup.string().required('Required'),
    toppingIds: yup.array().of(
      yup.object().shape({
        id: yup.string().required('Required'),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      id: selectedPizza?.id,
      name: selectedPizza?.name,
      description: selectedPizza?.description,
      imgSrc: selectedPizza?.imgSrc,
      toppingIds: selectedPizza?.toppingIds ? selectedPizza?.toppingIds : [],
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      let ids = values.toppingIds.map((topping: any) => topping.id);
      if (selectedPizza) {
        const updatePizza = {
          id: selectedPizza.id,
          name: values.name,
          description: values.description,
          imgSrc: values.imgSrc
            ? values.imgSrc
            : 'https://cdn.shopify.com/s/files/1/0503/0523/7143/files/4_7f96f01f-e49e-41ca-8556-b853c2f03d4b_480x480.jpg?v=1610182442',
          toppingIds: ids,
        };
        onUpdatePizza(updatePizza);
      } else {
        const newPizza = {
          name: values.name,
          description: values.description,
          imgSrc: values.imgSrc,
          toppingIds: ids,
        };
        onCreatePizza(newPizza);
      }
      setOpen(false);
    },
  });

  const animatedComponents = makeAnimated();

  const { loading, data } = useQuery(GET_TOPPINGS);
  if (loading) {
    return <div>Loading ...</div>;
  }

  let toppingNameList: ItoppingNameList[] = [];

  data?.toppings.forEach((topping: any) => {
    toppingNameList.push({
      id: topping.id,
      value: topping.name,
      label: topping.name,
    });
  });

  const handleChange = (options: any) => {
    const toppingIds = options.map((option: any) => option.id.toString());
    setSelectedOptions(toppingIds.id);
    formik.values.toppingIds = options;
  };

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
          {selectedPizza ? (
            <>
              <h1>{formik.values.name}</h1>
              <img src={selectedPizza.imgSrc} style={{ width: '28vw' }} />
            </>
          ) : (
            <img src={`${defaultPizza}`} className={classes.pizzaImgDefault} />
          )}
          <h2>Detail</h2>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Name: "
              defaultValue={selectedPizza?.name ? selectedPizza.name : 'Name'}
              onChange={formik.handleChange}
            />
            <br />
            <TextField
              id="description"
              label="Description: "
              type="text"
              defaultValue={selectedPizza?.description ? selectedPizza.description : 'Description'}
              onChange={formik.handleChange}
            />
            <br />
            <TextField
              id="imgSrc"
              label="Image URL: "
              type="text"
              defaultValue={selectedPizza?.imgSrc ? selectedPizza.imgSrc : 'Image Url'}
              onChange={formik.handleChange}
            />
            <h2>Toppings</h2>
            <Select
              isMulti
              options={toppingNameList}
              components={animatedComponents}
              // defaultValue = {selectedPizza? selectedPizza.toppings.map((topping: any) => topping.name + ", ") : 'Select...'}
              placeholder={selectedPizza ? selectedPizza.toppings.map((topping: any) => topping.name + ' ') : ''}
              closeMenuOnSelect={false}
              onChange={handleChange}
            />
            {selectedPizza ? (
              <>
                <button
                  aria-label="update"
                  onClick={(): void => {
                    formik.handleSubmit();
                    setOpen(false);
                  }}
                  type="submit"
                >
                  Submit
                </button>
                <button
                  aria-label="delete"
                  onClick={(): void => {
                    onDeletePizza(selectedPizza);
                    setOpen(false);
                  }}
                  type="submit"
                >
                  Delete
                </button>
              </>
            ) : (
              <button
                aria-label="create"
                onClick={(): void => {
                  formik.handleSubmit();
                  setOpen(false);
                }}
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default PizzaModal;
