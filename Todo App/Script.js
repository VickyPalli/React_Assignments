import React from "react";
import { useState } from "react";
import './style.css'

const TodoApp = () => {
    const [TodoList , SetTodo] = useState([]);
    const [inputdata , setinputdata] = useState("");

    const InputHandler = () =>{
       
        if( document.getElementById('Todo').value===""){
            alert("Please Enter the Valid Todo")
        }else{SetTodo([...TodoList,inputdata]);
            document.getElementById('Todo').value="";}
            
    }
    const inputcollector = (e) =>{
        setinputdata(e.target.value);
    }
    const deletehandler = (e) => {
        document.getElementById('List').removeChild(e.target.parentElement.parentElement);
    }

    return (
        <div className='container'>
            <center><h1>Todo Lists</h1></center>
            <label htmlFor="Todo">Todo List : </label><input id='Todo' placeholder="Todo List" onChange={inputcollector}></input>
            <button id='Button' className="Button" onClick={InputHandler}>Add Todo</button>
            <table id='List'>
                {TodoList.map((index,value) =>{
                        return (<tr key={value}><td id='hell'>{index}</td><td><button onClick={deletehandler} className='Delete'>Delete</button></td><td><button className="Edit">Edit</button></td></tr>)  
                })}
            </table>
        </div>
    )
}

export default TodoApp;