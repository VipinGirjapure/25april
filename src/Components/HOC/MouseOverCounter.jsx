import React from "react";
import IncrementCounterHoc from "./IncrementCounterHoc";

const MouseOverCounter = (props) => {
    const {name ,counter, handleChange} = props;
    return (
        <div>
            <h2 onMouseOver={handleChange}>Mouse Over Counter : {counter}</h2>
        </div>
    )

} 
export default IncrementCounterHoc(MouseOverCounter);