import React from "react";
import Card from "../UI/Card";
import RestaurantDisplay from "./RestaurantDisplay";
import classes from "./RestaurantList.module.css";

const RestaurantList = () => {
  const foodList = [
    {
      name: "Sushi",
      description: "Finest Fish and veggies",
      price: 22.99,
    },
    {
      name: "Fried Rice",
      description: "Cooked Rice with fresh Veggies",
      price: 19.5,
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      name: "Paneer Chili",
      description: "Soft and Fresh Paneer with Chilli sauce",
      price: 25.2,
    },
  ];
  return (
    <Card className={classes.frame}>
      <ul>
        {foodList.map((dish) => (
          <RestaurantDisplay details={dish}></RestaurantDisplay>
        ))}
      </ul>
    </Card>
  );
};

export default RestaurantList;
