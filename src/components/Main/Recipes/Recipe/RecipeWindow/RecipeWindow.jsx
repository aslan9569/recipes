import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { closeWindowRecipe } from "../../../../../redux/ducks/cardsReducer";
import RecipeInfo from "./RecipeInfo";
import classes from "./window.module.css";
import PropTypes from 'prop-types';

function RecipeWindow(props) {
  const dispatch = useDispatch();
  const idWindow = useSelector((state) => state.cards.idWindow);

  const closeRecipeWindow = () => {
    dispatch(closeWindowRecipe());
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.close}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeRecipeWindow}
            className={classes.esq}
          />
        </div>
        {props.allCards.map((card) => {
          if (card.id === idWindow) {
            return <RecipeInfo card={card} key={card.id} />;
          }
        })}
      </div>
    </div>
  );
}
RecipeWindow.propTypes = {
  allCards: PropTypes.array.isRequired,
  cards: PropTypes.array
}

export default RecipeWindow;