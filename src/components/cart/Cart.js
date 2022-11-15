import { useContext, useState,useEffect } from "react";
import axios from 'axios';

import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import AuthContext from "../../store/auth-context";

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
  const authCtx = useContext(AuthContext);

 //const totalAmount = cartCtx.totalAmount.toFixed(2);

  const [res, setResponse] = useState([])
  const [amount,setAmount]=useState()

  const [purchaseChange, setPurchase] = useState(false);
 
  const totalAmount = cartCtx.totalAmount.toFixed(2);
 
  const purchaseChangeHandler = () => {
    setPurchase(true);
    if (cartCtx.items.length > 0) {
      alert("Thanks for purchase");
    } else {
      alert("Add items to cart to purchase");
    }
  };

  const removeHandler = (id) => {
    cartCtx.removeItems(id);
  };


  const user = authCtx.email;
  const userEmail = user.replace('@', '')
  const newUser = userEmail.replace('.', '')

  useEffect(() => {
    getItems()
  }, [])  
    
  const getItems = () => {
    axios.get(`https://crudcrud.com/api/aafb1c706f80465b8635ee5bbda67227/login${newUser}`)
      .then((response) => {
        setResponse(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  } 

  const cartItems =res.map((items) => {
      return (
        <div key={items.id}>
          {" "}
          <div className={classes.main}>
            <img className={classes.image} src={items.item.imageUrl} alt=""></img>{" "}
            <span className={classes.title}>{items.item.title}</span>{" "}
          </div>{" "}
          <span className={classes.price}>PRICE - {items.item.price}</span>{" "}
          <span className={classes.quantity}>{items.quantity}</span>
          <button
            className={classes.rembutton}
            onClick={removeHandler.bind(null, items.item.id)}
          >
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
      <button className={classes.purbutton} onClick={purchaseChangeHandler}>
        PURCHASE
      </button>
    </Modal>
  );
};

export default Cart;
