import { Fragment,useContext } from 'react';

import classes from './CartButton.module.css';
import CartContext from '../../store/Cart-Context';

const CartButton=(props)=>
{
   const cartCtx=useContext(CartContext);

  /* const numberOfItems=cartCtx.items.reduce((currNumber,item)=>
   {
    return currNumber+item.quantity;
   }, 0); */ 

    return(
     <Fragment>
          <button className={classes.button} onClick={props.onClick}>Cart</button>
          <span className={classes.number}>{cartCtx.length}</span>
      </Fragment>
    )
}

export default CartButton;