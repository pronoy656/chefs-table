

const Cur = ({cur}) => {
    const{recipe_name,preparing_time,calories} = cur
    return (
        <div className="flex">
            <h1>{recipe_name}</h1>
            <h1>{preparing_time}</h1>
            <h1>{calories}:Calories</h1>
        </div>
    );
};

export default Cur;