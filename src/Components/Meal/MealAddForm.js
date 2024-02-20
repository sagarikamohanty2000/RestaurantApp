import React, { useRef } from "react";
import classes from "./MealAddForm.module.css";

const MealAddForm = (props) => {
  const amt = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();

    props.getItemAmount(amt.current.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="amount" id={classes.amountLabel}>
        Amount
      </label>
      <input
        id={classes.amount}
        type="number"
        defaultValue="1"
        ref={amt}
      ></input>
      <div>
        <button type="submit" id={classes.Addbtn}>
          + Add
        </button>
      </div>
    </form>
  );
};

export default MealAddForm;
