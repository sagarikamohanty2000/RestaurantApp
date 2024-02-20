import React, { useContext } from "react";
import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";

const HeaderCart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.items.reduce((curValue, item) => {
    return curValue + Number(item.amount)
  }, 0);

  const handleCart = () => {
    props.onClickCart(true);
  };
  return (
    <button className={classes.button} onClick={handleCart}>
      <span className={classes.cartIcon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCart;
