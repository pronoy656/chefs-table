

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Carts from './components/Carts/Carts'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

const[carts,setCarts] = useState([]);



const handleAddCook = recipe =>{
  // console.log(recipe)
     const addCarts = [...carts, recipe];
     setCarts(addCarts);
}

  return (
    <>
      
     <Navbar></Navbar>
     <Banner></Banner>

   <div className='md:flex gap-x-6'>
      <Recipes handleAddCook={handleAddCook}></Recipes>
      <Carts carts={carts} setCarts={setCarts}></Carts>
   </div>
      
      
    </>
  )
}

export default App
