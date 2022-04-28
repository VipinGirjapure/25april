import React from "react";
import ClickCounter from "./Components/HOC/ClickCounter"
import MouseOverCounter from "./Components/HOC/MouseOverCounter";
import RightClickCounter from "./Components/HOC/RightClickCounter"
const App = ()  =>{
  return (
    <div>
    <h1>Higher Order Component</h1>
    <ClickCounter/>
    <MouseOverCounter/>
    <RightClickCounter/>
    </div>
  );
}

export default App;
