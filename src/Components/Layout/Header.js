import React from "react";
import classes from "./Header.module.css";
import ModalImg from "../../Asserts/meals.jpg";
import HeaderCart from "./HeaderCart";
import RestaurantSmmary from "../Resturant/RestaurantSummary";

const Header = (props) => {
  const handleShowCart = () => {
      props.onShowCart(true)
  }
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCart onClickCart={handleShowCart}/>
      </header>
        <div className={classes["modal-img"]}>
          <img src={ModalImg} alt="Tasty and delicious food table"></img>
        </div>
        <RestaurantSmmary />
    </React.Fragment>
  );
};

export default Header;
