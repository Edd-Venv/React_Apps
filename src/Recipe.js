import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol style={{ fontSize: "1.3em" }}>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>
        <big>Calories: </big> {calories}
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
