import classes from "./HeaderCart.module.css";
import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCart = (props) => {
  
const handleCart = () => {
props.onClickCart(true);
}
  return (
    <button className = {classes.button} onClick={handleCart}>
      <span className={classes.cartIcon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span className={classes.badge}> 3 </span>
      </button>
  );
};

export default HeaderCart;
