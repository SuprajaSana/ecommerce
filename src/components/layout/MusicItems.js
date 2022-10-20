import { Fragment } from "react";

import classes from './MusicItems.module.css';

const productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
const MusicItems=()=>
{
    const submitHandler=(event)=>
    {
        event.preventDefault();
        }
    const productsItems=productsArr.map((item)=>
    {
        return(
        <div onSubmit={submitHandler}>{item.id} <span className={classes.title}>{item.title}</span> <img className={classes.items} src={item.imageUrl} alt=""></img> <span className={classes.price}>{item.price}</span> <button className={classes.button}>Add To Cart</button></div>)
    })
    return(
        <Fragment>
        <h1 className={classes.main}>MUSIC</h1>
        <div className={classes.display}>{productsItems}</div>
        </Fragment>
    )
}

export default MusicItems;