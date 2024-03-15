

const Recipe = ({recipe,handleAddCook}) => {
    const{recipe_image,recipe_name,short_description,preparing_time,calories} = recipe
    return (
        <div className="border border-indigo-600 rounded-2xl p-6 mt-3">
            <img className="rounded-2xl" src={recipe_image} alt="" />
            <p>{recipe_name}</p>
            <p>{short_description}</p>
           <div className="flex items-center justify-between">
           <p>{preparing_time}</p>
            <p>{calories}:Calories</p>
           </div>
            <button onClick={()=> handleAddCook(recipe)} className="bg-[#FF0000] p-3 text-lg font-medium rounded-3xl">Want to Cook</button>
        </div>
    );
};

export default Recipe;