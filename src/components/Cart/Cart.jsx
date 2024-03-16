const Cart = ({ cart, clickDeleteCarts, currentCookAdd, index }) => {
  const { recipe_name, preparing_time, calories, id } = cart;
  return (
    <div>
      <div className="flex items-center justify-between mt-6 bg-slate-200 rounded-xl p-2 text-sm font-medium">
        <p>{index + 1}</p>
        <h1 className="w-1/4">{recipe_name}</h1>
        <p>{preparing_time}</p>
        <p>{calories}:Calories</p>
        <button
          onClick={() => {
            clickDeleteCarts(id);
            currentCookAdd(cart);
          }}
          className="bg-[#FF0000] p-3 rounded-2xl text-white"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

export default Cart;
