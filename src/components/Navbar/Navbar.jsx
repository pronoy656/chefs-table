import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <h1 className="text-3xl font-bold">Recipe Calories</h1>
      </div>
      <div className="flex items-center">
        <div className="gap-x-12 flex justify-center items-center">
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
      </div>

      <div className="gap-x-32">
        <div className="flex items-center">
          <div className="relative">
            <input
              className="bg-slate-200 p-4 rounded-2xl"
              type="text"
              placeholder="Search"
            />
            <div className="absolute top-4 right-3 text-xl">
              <CiSearch />
            </div>
          </div>
          <div>
            <button className="bg-[#0BE58A] p-4 rounded-full text-3xl">
              <CgProfile />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
