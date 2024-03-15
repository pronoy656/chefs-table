import Cur from "../Cur/Cur";


const Current = ({current}) => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Currently Cooking:{current.length}</h1>
             
            {
              current.map(cur=><Cur cur={cur}></Cur>)
            }

        </div>
    );
};

export default Current;