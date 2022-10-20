import { useContext } from 'react';

import MusicItems from './MusicItems';
import CartContext from '../../store/Cart-Context';

const Music=(props)=>
{
    const cartCtx=useContext(CartContext)

    const addCartHandler=(quantity)=>{
        cartCtx.addItems({
            key:props.id,
            id:props.id,
            title:props.title,
            imageUrl:props.imageUrl,
            price:props.price,
            quantity:quantity
        })
    }
    
    return(
        <MusicItems onAddCart={addCartHandler}></MusicItems>
    )
}

export default Music;