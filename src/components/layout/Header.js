import { Fragment } from 'react';

import classes from './Header.module.css';
import CartButton from '../cart/CartButton';


const Header=(props)=>
{
    return(
      <Fragment>
        <div className={classes.header}>
        <span className={classes.home}>HOME</span>
        <span className={classes.store}>STORE</span>
        <span className={classes.about}>ABOUT</span>
        <CartButton onClick={props.onShow}></CartButton>
        </div>
        <h1 className={classes['main-header']}>The Generics</h1>
      </Fragment>
    )
}

export default Header;