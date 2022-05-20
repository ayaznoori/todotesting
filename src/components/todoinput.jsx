import React from "react";
import { concat } from "./todolist";
const Inputlist= ()=>{
  const  [inputitem,setinputitem]=React.useState("");
    return(
        <div className="conatiner">
            <input type="text" className="input-box" placeholder="Enter Here" onChange={(e)=>{setinputitem(e.target.value);}} />
            <button className="input-button" onClick={()=>{concat(inputitem) }} >+</button>
        </div>
    )
}
export {Inputlist};