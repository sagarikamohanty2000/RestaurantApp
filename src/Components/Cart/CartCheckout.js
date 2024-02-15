import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./CartCheckout.module.css";

const CartCheckout = () => {
  const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
  };

  const Layout = () => {
    return (
      <Card className={classes["cart-frame"]}>
        <h4 className={classes["meal-title"]}>Sushi</h4>
        <p className={classes["content-body"]}>
          Total Amount <div className={classes.amount}> 35.62</div>
        </p>

        <button type="button" className={classes.btnClose}>
          Close
        </button>
        <button type="button" className={classes.btnOrder}>
          Order
        </button>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("cart-backdrop")
      )}
      {ReactDOM.createPortal(
        <Layout />,
        document.getElementById("cart-layout")
      )}
    </React.Fragment>
  );
};
export default CartCheckout;