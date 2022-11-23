import { Box, Card, CardContent, Theme } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import toDollars from '../../lib/format-dollars';
import { Pizza } from '../../types/pizza';
import makePizza from '../../assets/img/make-pizza.jpeg';
import { AddCircle } from '@material-ui/icons';
import { Brightness5 } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ListContainer: {
      display: 'flex',
      width: '30%',
      justifyContent: 'center',
      margin: '1vw',
    },
    card: {
      display: 'flex',
      width: '30vw',
      height: '80vh',
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    imgBox: {
      textAlign: 'right',
      width: '95%',
      height: '90%',
    },
    pizzaImgDefault: {
      //flex: "2",
      //width: "100%"
    },
    pizzaInfoBox: {
      height: '20%',
      display: 'flex',
      margin: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    pizzaName: {
      fontSize: '2vw',
    },
    pizzaDes: {
      fontSize: '1vw',
    },
    pizzaPrice: {
      fontSize: '1.5vw',
    },
    newPizzaBox: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      padding: '0.5vw 0',
    },
    addIcon: {
      fontSize: '3vw',
      color: 'white',
      transition: '0.3s',
      '&:hover': {
        color: 'grey',
      },
    },
    fixIcon: {
      fontSize: '3vw',
      color: 'black',
      position: 'relative',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        color: 'grey',
      },
    },
  })
);

export interface PizzaItemProps {
  pizza?: Pizza;
  handleOpen: (pizza?: Pizza) => void;
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza, handleOpen }) => {
  const classes = useStyles();
  const [visibledFixIcon, setVisibledFixIcon] = useState(false);

  return (
    <Box className={classes.ListContainer}>
      <Card>
        <CardContent
          style={{ padding: '0', width: '100%', height: '100%' }}
          onMouseLeave={() => setVisibledFixIcon(!visibledFixIcon)}
        >
          <div className={classes.card}>
            {pizza ? (
              <>
                <div
                  className={classes.imgBox}
                  onMouseEnter={() => setVisibledFixIcon(!visibledFixIcon)}
                  style={{
                    backgroundImage: `url(${pizza?.imgSrc})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                  }}
                >
                  {visibledFixIcon ? (
                    <IconButton className={classes.fixIcon} type="button" onClick={(): void => handleOpen(pizza)}>
                      <Brightness5 fontSize="inherit" />
                    </IconButton>
                  ) : (
                    ''
                  )}
                </div>
                <div className={classes.pizzaInfoBox}>
                  <p className={classes.pizzaName}>{pizza?.name}</p>
                  <p className={classes.pizzaDes}>{pizza?.description ? pizza.description : ''}</p>
                  <p className={classes.pizzaPrice}>{pizza?.priceCents ? toDollars(pizza.priceCents) : ''}</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className={classes.newPizzaBox}
                  style={{
                    backgroundImage: `url(${makePizza})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                  }}
                >
                  <h2 style={{ fontSize: '2.5vw' }}>Make New Pizza</h2>
                  <img className={classes.pizzaImgDefault} />
                  <IconButton
                    className={classes.addIcon}
                    edge="end"
                    aria-label="create"
                    type="button"
                    onClick={(): void => handleOpen(pizza)}
                  >
                    <AddCircle fontSize="inherit" />
                  </IconButton>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PizzaItem;
