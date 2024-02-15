import React from 'react';
import classes from './RestaurantSummary.module.css';

const RestaurantSummary = () => {
 
    return (
        <div className={classes.frame}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favorite meal from  our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
            <p>All our meals are cokked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    )
}

export default RestaurantSummary;