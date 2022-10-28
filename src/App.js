import { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Music from './components/layout/Music';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import Home from './pages/Home';
import About from './pages/About';


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
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/store">
        <Music></Music>
      </Route>
      </main>   
     <Footer></Footer>
    </CartProvider>
  );
}

export default App;
