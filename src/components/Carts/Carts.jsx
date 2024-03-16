import { useState } from "react";
import Cart from "../Cart/Cart";
import Current from "../Current/Current";

const Carts = ({ carts, setCarts }) => {
  const clickDeleteCarts = (id) => {
    const cardFilter = carts.filter((cart) => cart.id !== id);
    setCarts(cardFilter);
  };

  const [current, setCurrent] = useState([]);

  const currentCookAdd = (cart) => {
    // console.log(cart)
    const updateCurrentCooking = [...current, cart];
    setCurrent(updateCurrentCooking);
  };

  return (
    <div className="md:w-1/3 border-2 border-red-700 p-8">
      <h1 className="text-3xl font-semibold text-center">
        Want to cook:{carts.length}
      </h1>

      <div className="border-b-2 mt-4"></div>

      <div className="flex gap-x-20 text-lg font-medium mt-6">
        <p>Name</p>
        <p>Time</p>
        <p>Calories</p>
        <p>Button</p>
      </div>
      {carts.map((cart, index) => (
        <Cart
          cart={cart}
          clickDeleteCarts={clickDeleteCarts}
          currentCookAdd={currentCookAdd}
          index={index}
        ></Cart>
      ))}

      {/* <h1 className="text-3xl font-semibold text-center">Currently Cooking:{carts.length}</h1> */}

      <Current current={current}></Current>
    </div>
  );
};

export default Carts;
