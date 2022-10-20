import { useState } from 'react';

import Header from './components/layout/Header';
import Music from './components/layout/Music';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  
  const[cartIsShown,setCartIsShown]=useState(false)

  const cartShownHandler=()=>{
    setCartIsShown(true)
  }
  const cartHideHandler=()=>
  {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartHideHandler}></Cart>}
     <Header onShow={cartShownHandler}></Header> 
     <main>   
     <Music></Music>
     </main>
     <Footer></Footer>
    </CartProvider>
  );
}

export default App;
