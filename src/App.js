import { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Music from './components/layout/Music';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import Home from './pages/Home';
import About from './pages/About';
import Cartstorebutton from './components/layout/Cartstorebutton';
import Contact from './pages/Contact';

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
     <main>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/store">
      <Header onShow={cartShownHandler}></Header> 
        <Music></Music>
        <Cartstorebutton onClick={cartShownHandler}></Cartstorebutton>
        <Footer></Footer>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
     </main>
    </CartProvider>
  );
}

export default App;
