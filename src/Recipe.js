import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <h1>{recipe.label}</h1>
      <ol>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{recipe.calories}</p>
      <img className={style.img} src={recipe.image} alt={recipe.label} />
    </div>
  );
};

export default Recipe;
