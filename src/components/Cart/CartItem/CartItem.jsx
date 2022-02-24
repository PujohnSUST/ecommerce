import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './Styles';

const CartItem = ({ item }) => {
    
    const classes = useStyles();
    
    return (

    <Card>
        <CardMedia className={classes.media} title={item.name} image={item.image.url} />

            <CardContent className={classes.cardContent}>
                <Typography variant="h5" color="initial">{item.name}</Typography>
                <Typography variant="h6" color="initial">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions>
                <div className={classes.buttons}>
                    <Button type='button' size='small'>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small'>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary'>Remove</Button>
            </CardActions>
    </Card>
)
}

export default CartItem