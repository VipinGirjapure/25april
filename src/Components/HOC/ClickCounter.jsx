import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import IncrementCounterHoc from "./IncrementCounterHoc";


const ClickCounter = (props) => {
    const {name ,counter, handleChange} = props;

    return (
        <div>
            <h2>{name} Clicked On Counter : {counter} </h2>
            <button onClick={handleChange}>Click Counter</button>
        </div>
    )
};
const UpdateComponent = IncrementCounterHoc(ClickCounter);
 

export default UpdateComponent;