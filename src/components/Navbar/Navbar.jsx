

const Navbar = () => {
    return (
        <div className="flex">
       <div className="flex gap-x-48 items-center">
       <div>
           <h1 className="text-3xl font-bold">Recipe Calories</h1>
           </div>
          <div className="flex gap-x-44 items-center">
          <div className="gap-x-12 flex justify-center items-center">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
       </div>
         <div className="flex items-center">
         <div>
                <input className="bg-slate-100 p-3 rounded-xl" type="text" placeholder="Search" />
                <div>

                </div>
            </div>
            <div>
                <button className="bg-[#0BE58A] p-4 rounded-2xl">Profile</button>
            </div>
         </div>
          </div>
        </div>
    );
};

export default Navbar;