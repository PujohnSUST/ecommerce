import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

// const products = [
//   {id:1, name:'shoes', description:'All shoes here', price:'$7', image:'https://picsum.photos/seed/picsum/200/300'},
//   {id:2, name:'macBook', description:'All MacBook here', price:'$12', image:'https://picsum.photos/seed/picsum/200/300'}
// ]

const Products = ({ products, onAddToCart }) => {

  const classes = useStyles();
  return (
    <main className={classes.content}>
       <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart}/>
              </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products