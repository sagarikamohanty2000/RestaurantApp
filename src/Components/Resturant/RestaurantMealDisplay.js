import React from "react";
import MealAddForm from "../Meal/MealAddForm";
import classes from "./RestaurantMealDisplay.module.css";

const RestaurantMealDisplay = (props) => {
  return (
    <li className={classes["list-frame"]}>
      <div>
        <div className={classes["dish-name"]}>{props.details.name}</div>
        <div className={classes.des}>{props.details.description}</div>
        <div className={classes.price}>{` $ ${props.details.price}`}</div>
      </div>
      <div>
        <MealAddForm />
      </div>
    </li>
  );
};

export default RestaurantMealDisplay;
