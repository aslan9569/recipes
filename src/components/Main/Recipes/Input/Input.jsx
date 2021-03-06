import React, { useState } from "react";
import classes from "./input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipe } from "../../../../redux/ducks/cardsReducer";

function Input(props) {
  const dispatch = useDispatch();
  const filteredRecipes = (e) => {
    dispatch(filterRecipe(e.target.value));
  };

  return (
    <div className={classes.input}>
      <form>
        <input
          type="text"
          className={classes.foundCategory}
          placeholder="Поиск"
          onChange={filteredRecipes}
        />
      </form>
    </div>
  );
}

export default Input;
