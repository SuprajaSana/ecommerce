import { Fragment, useContext } from "react";

import classes from "./MusicItems.module.css";
import CartContext from "../../store/Cart-Context";
import { Link } from "react-router-dom";  
import AuthContext from "../../store/auth-context";
import axios from "axios";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const MusicItems = (props) => {

  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const token = authCtx.token;
  const email = authCtx.email;
  const userEmail = email.replace('@', '')
  const newUser = userEmail.replace('.', '')


  const addHandler = (item) => {
    cartCtx.addItems({ ...item, quantity: 1 })

    axios.post(
      `https://crudcrud.com/api/aafb1c706f80465b8635ee5bbda67227/login${newUser}`, { item,quantity:1 })
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const productsItems = productsArr.map((item) => {
    return (
      <div onSubmit={submitHandler} key={item.id}>
        <span className={classes.title}>{item.title}</span>{" "}
        <Link to={`/product/${item.id}`}>
          <img className={classes.items} src={item.imageUrl} alt=""></img>
        </Link>{" "}
        <span className={classes.price}>${item.price}</span>{" "}
        <button
          className={classes.button}
          onClick={addHandler.bind(null, item)}
          to="/cart"
        >
          Add To Cart
        </button>
      </div>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.main}>MUSIC</h1>
      <div className={classes.display}>{productsItems}</div>
    </Fragment>
  );
};

export default MusicItems;
