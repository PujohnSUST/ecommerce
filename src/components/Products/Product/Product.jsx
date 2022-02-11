import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';

const Product = ({ product }) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia title={product.name} image={product.image} className={classes.media} />
        <CardContent>
          <div className={classes.cardContent}>

              <Typography variant="h5" color="initial" gutterBottom>
                  {product.name}
              </Typography>

              <Typography variant="h5" color="initial">
                  {product.price}
              </Typography>

            </div>

            <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        </CardContent>

        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Card">
                <AddShoppingCart />
            </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product