import React from "react";
import { Component } from "react";

const IncrementCounterHoc = (Comp) => {
    class AddedCounterFunc extends Component{
        constructor(props){
            super(props);
            this.state ={
                counter : 0,
            };
        }

        handleChange = () => {
            this.setState({
                counter : this.state.counter + 1,
            });
        };
render(){
    return (
        <Comp
        name = "Vipin"
        counter = {this.state.counter}
        handleChange = {this.handleChange}/>
    )
}

    }
    return AddedCounterFunc;
}

export default IncrementCounterHoc;