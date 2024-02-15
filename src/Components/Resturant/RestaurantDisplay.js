import React from "react";
import classes from './RestaurantDisplay.module.css';

const RestaurantDisplay = (props) => {
  return (
    <li className={classes["list-frame"]}>
      <div className={classes["dish-name"]}>{props.details.name}</div>
      <div className={classes.des}>{props.details.description}</div>
      <div className={classes.price}>{` $ ${props.details.price}`}</div>
    </li>
  );
};

export default RestaurantDisplay;
