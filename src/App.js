import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "53e39527";
  const APP_KEY = "c2fdc42aec0607cbf2cd0eed4cdb963c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };
  useEffect(() => {
    getRecipes();
  }, [query]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={searchHandler}
        />
        <button className="search-btn" type="submit">
          SEARCH
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} recipe={recipe.recipe} />
        ))}
        ;
      </div>
    </div>
  );
};
export default App;
