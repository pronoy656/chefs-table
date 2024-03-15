


const Cart = ({cart,clickDeleteCarts,currentCookAdd}) => {
    const{recipe_name,preparing_time,calories,id} = cart
    return (
        <div>
           <div className="flex items-center">
           <h1>{recipe_name}</h1>
            <p>{preparing_time}</p>
            <p>{calories}:Calories</p>
            <button onClick={()=>{clickDeleteCarts(id);currentCookAdd(cart);}} className="bg-[#0BE58A] p-3 rounded-2xl">Preparing</button>
           </div> 
        </div>
    );
};

export default Cart;
