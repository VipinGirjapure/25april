import React from "react";
import IncrementCounterHoc from "./IncrementCounterHoc";


const RightClickCounter = (props) => {
    const {name ,counter, handleChange} = props;
   return (
       <div>
           <h2>Right Click Counter : {counter}</h2>
           <button onContextMenu={handleChange}>Right Click Counter</button>
       </div>
   );
};

const UpdateComponent = IncrementCounterHoc(RightClickCounter)


export default UpdateComponent;