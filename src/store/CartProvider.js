import { useReducer } from 'react'

import CartContext from './Cart-Context'


const defaultCartState={
  items:[],
  totalAmount:0,
}
const cartReducer=(state,action)=>
{
  if(action.type ==='ADD')
  {
      const updatedItems=state.items.concat(action.item)    
      const updatedTotalAmount=state.totalAmount+action.item.price * action.item.quantity;
  return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
  }
}
}


const CartProvider=(props)=>
{
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState) 
  const addItemHandler=(item)=>
  {
     dispatchCartAction({type:'ADD' , item:item})
  }

  const removeItemHandler=(id)=>
  {
    dispatchCartAction({type:'REMOVE', id:id})
  }

const cartContext={
  items:cartState.items,
  totalAmount:cartState.totalAmount,
  addItems:addItemHandler,
  removeItems:removeItemHandler,
}
  return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;