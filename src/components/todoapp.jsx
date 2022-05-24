import React, { useState ,useEffect } from 'react';
let hi="defaultval";
function Todoapp() {
    const [todoinput,settodoinput]=React.useState("");
    const [todos,settodos]=useState([]);
    const addtodo=()=>{
      if(todoinput!=""){
        fetch("http://localhost:1100/todos",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          value:todoinput,
          isComplete:false,
        })
        }).then((e)=>e.json())
        .then((data)=>{
          settodos([...todos,data]);
          settodoinput("");
        })
      }
    }

    useEffect(()=>{
      fetch("http://localhost:1100/todos").then((e)=> e.json()).then((data1)=>{settodos(data1)});
    },[])
    
   const removetodo =(todoid)=>{
    let result=todos.filter((obj)=> {if(obj.id!=todoid) return obj;})
    fetch("http://localhost:1100/todos/"+todoid,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
      }).then((e)=>e.json())
      .then((data)=>{
         settodos(result)
      })
  }
  const change=()=>{
  
  }

  return (
    <div className="container ">
            <h2>Todo App</h2>
            <input type="text" className="input-box" placeholder="Enter Here" onChange={(e)=>{settodoinput(e.target.value)}} />
            <button className="input-button" onClick={()=> addtodo()} >+</button>
      <div>
        <div className='list'>
        <ul type='none'>
     {todos.map((ele)=>{
              return <li key={ele.id}  ><input type='checkbox'  onChange={()=>change()} ></input>{ele.value} <button onClick={()=> removetodo(ele.id)}>x</button></li>
          })} </ul>
          </div>
      </div>
    </div>
  );
}

export {Todoapp};
