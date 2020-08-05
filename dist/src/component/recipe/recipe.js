import React from "react";
import { RecipeContainer } from "./recipe.styledcomp";

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <RecipeContainer>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="Food" />
    </RecipeContainer>
  );
};

export default Recipe;
