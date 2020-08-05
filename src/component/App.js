import React, { useState, useEffect } from "react";
import Recipe from "./recipe/recipe";
import {
  AppContainer,
  SearchBar,
  SearchForm,
  SearchButton,
  Recipes,
} from "./recipe/recipe.styledcomp";

const App = () => {
  const APP_ID = "2c7481f7";
  const APP_KEY = "816ed099a7e3c75fdae6c67d232ad34a";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setSearch("");
  };

  return (
    <AppContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBar
          className="search-bar"
          type="text"
          placeholder="Search your favourite food!"
          value={search}
          onChange={updateSearch}
        />
        <SearchButton className="search-button" type="submit">
          Search
        </SearchButton>
      </SearchForm>
      <Recipes>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </Recipes>
    </AppContainer>
  );
};

export default App;
