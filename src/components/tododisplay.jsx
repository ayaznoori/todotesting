import {arr} from "./todolist";
import React from "react";
 const Tododisplay=()=>{
    const [arrlist,setarrlist]=React.useState([]);
 
    return (
        <div>
      <button onClick={()=>{ setarrlist(arr)}}>Show</button>
 
       {arrlist.map((e)=>{ return (<h1>{e}</h1>)})}
      </div>
    )
}
export {Tododisplay}