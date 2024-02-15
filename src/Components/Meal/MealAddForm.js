import React from "react";
import classes from "./MealAddForm.module.css";

const MealAddForm = () => {
  return (
    <form>
      <label htmlFor="amount" id={classes.amountLabel}>
        Amount
      </label>
      <input id={classes.amount} type="number"></input>
      <div>
        <button type="submit" id={classes.Addbtn}>
          + Add
        </button>
      </div>
    </form>
  );
};

export default MealAddForm;
