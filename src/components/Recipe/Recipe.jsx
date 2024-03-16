import { BsStopwatch } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const Recipe = ({ recipe, handleAddCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    preparing_time,
    calories,
    id,
  } = recipe;
  return (
    <div className=" rounded-2xl p-6 mt-7 shadow-xl shadow-white border">
      <img className="rounded-2xl" src={recipe_image} alt="" />
      <p className="text-2xl font-semibold mt-6">{recipe_name}</p>
      <p className="text-lg font-normal mt-4 text-[#878787]">
        {short_description}
      </p>
      <div className="border-b-2 mt-4"></div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-x-3">
          <p className="text-2xl">
            <BsStopwatch />
          </p>
          <p className="text-[#878787] text-lg ">{preparing_time}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <p className="text-2xl">
            <MdOutlineLocalFireDepartment />
          </p>
          <p className="text-[#878787] text-lg ">{calories}:Calories</p>
        </div>
      </div>
      <button
        onClick={() => handleAddCook(recipe, id)}
        className="bg-[#FF0000] p-3 text-lg font-medium rounded-3xl mt-6"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
