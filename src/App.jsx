import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Carts/Carts";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddCook = (recipe, id) => {
    // console.log(recipe)
    const addCarts = [...carts, recipe];
    // setCarts(addCarts);

    const isExist = carts.find((cart) => cart.id == id);
    if (!isExist) {
      setCarts(addCarts);
    } else {
      <ToastContainer />;
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="text-center mt-24">
        <h1 className="text-4xl font-semibold mb-6">Our Recipes</h1>
        <p className="text-base font-normal">
          we've got something for everyone. From comforting classics to exotic
          delights, each recipe is thoughtfully curated to bring joy to your
          taste buds. <br /> Join us on a journey of flavor exploration and
          let's create delicious memories together.{" "}
        </p>
      </div>

      <div className="md:flex gap-x-6 mt-12">
        <Recipes handleAddCook={handleAddCook}></Recipes>
        <Carts carts={carts} setCarts={setCarts}></Carts>
      </div>
    </>
  );
}

export default App;
