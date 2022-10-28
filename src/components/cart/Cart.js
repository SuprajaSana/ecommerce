import { useContext, useState } from "react";

import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";

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
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount=cartCtx.totalAmount.toFixed(2);

  const [purchaseChange,setPurchase]=useState(false);

  const purchaseChangeHandler=()=>
  {
    setPurchase(true)
    alert('Thanks for Purchase')
  }

  const removeHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const cartItems = cartCtx.items.map((items) => {
    return (
      <div>
        {" "}
        <div className={classes.main}>
          <img className={classes.image} src={items.imageUrl} alt=""></img>{" "}
          <span className={classes.title}>{items.title}</span>{" "}
        </div>{" "}
        <span className={classes.price}>PRICE - {items.price}</span>{" "}
        <span className={classes.quantity}>{items.quantity}</span>
        <button className={classes.rembutton} onClick={removeHandler.bind(null,items.id)}>
          REMOVE
        </button>
      </div>
    );
  });
  return (
    <Modal>
      <div>
        <h2 className={classes.heading}>CART</h2>
        <button className={classes.delbutton} onClick={props.onClose}>
          X
        </button>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total - </span>
        <span>${totalAmount}</span>
      </div>
      <button className={classes.purbutton} onClick={purchaseChangeHandler}>PURCHASE</button>
    </Modal>
  );
};

export default Cart;
