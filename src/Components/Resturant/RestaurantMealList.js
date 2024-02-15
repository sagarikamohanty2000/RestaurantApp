import React from "react";
import Card from "../UI/Card";
import RestaurantMealDisplay from "./RestaurantMealDisplay";
import classes from "./RestaurantMealList.module.css";

const mealList = [
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
const RestaurantMealList = () => {
  return (
    <Card className={classes.frame}>
      <ul>
        {mealList.map((dish) => (
          <RestaurantMealDisplay details={dish}></RestaurantMealDisplay>
        ))}
      </ul>
    </Card>
  );
};

export default RestaurantMealList;
