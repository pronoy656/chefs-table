import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleAddCook}) => {
      
      const [recipes,setRecipes] = useState([])
      useEffect(() =>{
        fetch('loadData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
      })

    return (
        <div className="md:w-2/3 border border-black rounded-2xl p-6">
           <div className="text-center">
           <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
           </div>

           <div className="grid md:grid-cols-2 gap-x-6">
           {
                recipes.map(recipe => <Recipe recipe={recipe} handleAddCook={handleAddCook}></Recipe>)
            }
           </div>
        </div>
    );
};

export default Recipes;