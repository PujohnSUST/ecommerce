import React from 'react';

import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';

import useStyles from './styles';

const Navbar = ({totalItems}) => {

    const classes = useStyles();
  return (
    <>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <img src={logo} alt="commerce js logo" width="50"/> 
                     E-merce
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" >
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>    
                </div>

            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar