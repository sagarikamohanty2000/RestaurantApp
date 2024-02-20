import React, { useContext } from "react";
import MealAddForm from "../Meal/MealAddForm";
import classes from "./RestaurantMealDisplay.module.css";
import CartContext from "../../Store/CartContext";

const RestaurantMealDisplay = (props) => {
  const cartContext = useContext(CartContext);

  const addToCart = (amount) => {
    const item = {
      id: props.details.id,
      name: props.details.name,
      price: props.details.price,
      amount: amount,
    };
    cartContext.addItem(item);
  };

  return (
    <li className={classes["list-frame"]}>
      <div>
        <div className={classes["dish-name"]}>{props.details.name}</div>
        <div className={classes.des}>{props.details.description}</div>
        <div className={classes.price}>{` $ ${props.details.price}`}</div>
      </div>
      <div>
        <MealAddForm getItemAmount={addToCart} />
      </div>
    </li>
  );
};

export default RestaurantMealDisplay;
