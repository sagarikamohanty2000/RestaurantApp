import classes from "./HeaderCart.module.css";
import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCart = () => {
  return (
    <button className = {classes.button}>
      <span className={classes.cartIcon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span className={classes.badge}> 3 </span>
      </button>
  );
};

export default HeaderCart;
