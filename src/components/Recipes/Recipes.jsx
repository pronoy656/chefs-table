import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleAddCook, id }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("loadData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });

  return (
    <div className="md:w-2/3 border  shadow-lg shadow-white rounded-2xl p-6">
      <div className="grid md:grid-cols-2 gap-x-6">
        {recipes.map((recipe) => (
          <Recipe
            recipe={recipe}
            key={id}
            handleAddCook={handleAddCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
