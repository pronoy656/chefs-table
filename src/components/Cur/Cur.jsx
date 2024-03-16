const Cur = ({ cur, index }) => {
  const { recipe_name, preparing_time, calories } = cur;
  return (
    <div className="flex gap-x-14 mt-6 bg-slate-200 rounded-xl p-2 text-sm font-medium">
      <p>{index + 1}</p>
      <h1 className="w-1/4">{recipe_name}</h1>
      <h1>{preparing_time}</h1>
      <h1>{calories}:Calories</h1>
    </div>
  );
};

export default Cur;
