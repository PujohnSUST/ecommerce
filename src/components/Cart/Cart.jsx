import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';

import useStyles from './Styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  const classes = useStyles();



  const EmptyCart = () => (
    <Typography variant="subtitle1" color="initial">
        You have no items in  your shopping cart. <Link to='/'>Please add some items</Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
    <Grid container spacing={3}>
      {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
              <CartItem 
                item={item}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                onEmptyCart={onEmptyCart}
              />
          </Grid>
      ))}
    </Grid>

    <div className={classes.cardDetails}>
      <Typography variant="h4" color="initial">SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
      <Button className={classes.emptyButton} type="button" variant='contained' color='secondary' onClick={onEmptyCart}>
          Empty Cart
      </Button>

      <Button className={classes.checkoutButton} type="button" variant='contained' color='primary'>
          Checkout
      </Button>
    </div>
</>
  )






  if (!cart.line_items) return 'Loading';

  return (
    <Container>
        <div className={classes.toolbar} gutterBottom />
        <Typography variant="h4" color="initial" gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? EmptyCart () : FilledCart () }
  
    </Container>
  )
}

export default Cart