import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';

const Product = ({ product, onAddToCart}) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia title={product.name} image={product.image.url} className={classes.media} />
        <CardContent>
          <div className={classes.cardContent}>

              <Typography variant="h5" color="initial" gutterBottom>
                  {product.name}
              </Typography>

              <Typography variant="h5" color="initial">
                  {product.price.formatted_with_symbol}
              </Typography>

            </div>

            <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: product.description }} />
        </CardContent>

        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}  >
                <AddShoppingCart />
            </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product