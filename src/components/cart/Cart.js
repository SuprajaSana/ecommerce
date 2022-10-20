import { useContext } from 'react';

import Modal from './Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-Context';

/*const cartElements=[
    {
        title: 'Colors',   
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
}] */
const Cart=(props)=>
{
    const cartCtx=useContext(CartContext)

    const removeItemHandler=()=>
    {
        
    }

    const cartItems=cartCtx.items.map((item)=>
    {
        return(
         <div> <div className={classes.main}><img className={classes.image} src={item.imageUrl} alt=""></img> <span className={classes.title}>{item.title}</span> </div> <span className={classes.price}>PRICE - {item.price}</span> <span className={classes.quantity}>{item.quantity}</span><button className={classes.rembutton} onClick={removeItemHandler}>REMOVE</button></div> 
        )
    })
    return(
        <Modal>
            <div>
            <h2 className={classes.heading}>CART</h2>
            <button className={classes.delbutton} onClick={props.onClose}>X</button>
            </div>
        {cartItems}
        <div className={classes.total}>
        <span>Total </span>
        <span>$0</span>
        </div>
        <button className={classes.purbutton}>PURCHASE</button>
        </Modal>
    )
}

export default Cart;