import Cur from "../Cur/Cur";

const Current = ({ current }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-6">
        Currently Cooking:{current.length}
      </h1>
      <div className="border-b-2 mt-4 "></div>
      <div className="flex text-lg font-medium mt-6 bg-red-200 p-2 rounded-xl">
        <p className="w-1/4">No</p>
        <p className=" w-1/4">Name</p>
        <p className=" w-1/4">Time</p>
        <p className=" w-1/4">Calories</p>
      </div>

      {current.map((cur, index) => (
        <Cur cur={cur} index={index}></Cur>
      ))}
    </div>
  );
};

export default Current;
