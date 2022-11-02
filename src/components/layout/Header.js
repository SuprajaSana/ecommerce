import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import CartButton from '../cart/CartButton';


const Header=(props)=>
{
    return(
      <Fragment>
        <div className={classes.header}>
        <nav>
        <NavLink className={classes.home} to="/home">HOME</NavLink>
        <NavLink className={classes.store} to="/store">STORE</NavLink>
        <NavLink className={classes.about} to="/about">ABOUT</NavLink>
        <NavLink className={classes.about} to="/contact">CONTACT US</NavLink>
        </nav>
        <CartButton onClick={props.onShow}></CartButton>
        </div>
        <h1 className={classes['main-header']}>The Generics</h1>
      </Fragment> 

    )
} 

export default Header; 

/*const Header = (props) => {
  const [homePage, setHomePage] = useState(false);

  const handleClick = () => {
    setHomePage(true);
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <nav>
          <NavLink className={classes.home} to="/home">
            <span onClick={handleClick}>HOME</span>
          </NavLink>
          <NavLink className={classes.store} to="/store">
            STORE
          </NavLink>
          <NavLink className={classes.about} to="/about">
            ABOUT
          </NavLink>
        </nav>
        <CartButton onClick={props.onShow}></CartButton>
      </div>
      <h1 className={classes["main-header"]}>The Generics</h1>

      {homePage ? (
        <div class={classes.circle}>
          <div class={classes.buttonplay}></div>
        </div>
      ) : (
       null
      )}
    </Fragment>
  );
}; 

export default Header; */