import { useState } from 'react';
import './style.css'


function Assignment2(){
     const [Firstname , FirstnameSet] = useState("");
     const [Lastname , LastnameSet] = useState("");
     const [Age , Ageset] = useState("");

     const FirstNameHandler = (event)=>{
         FirstnameSet(event.target.value);
     }

     const LastNameHandler = (event)=>{
        LastnameSet(event.target.value);
    }

    const AgeHandler = (event)=>{
        if(!isNaN(event.target.value)) Ageset(event.target.value);
        
    }
    const Formclear = ()=>{
        FirstnameSet("");
        LastnameSet("");
        Ageset("");
    }

    return(
        <>
        <div class='container'>
            <div class='form-box'>
            <label for='First'>First Name :</label><input id="First" onChange={FirstNameHandler} value={Firstname}></input>
        <label for='Last'>Last Name :</label><input id="Last" onChange={LastNameHandler} value={Lastname}></input>
        <label for='Age'>Age :</label><input id="Age" onChange={AgeHandler} value={Age}></input>
            </div>
        
        <div class='cart'>
            <div class='name'>Full Name :{Firstname + Lastname } </div>
            <div class='age'>Age : {Age}</div>
            <button onClick={Formclear}>Clear Form</button>
        </div>
        </div>
        </>
    )
}

export {Assignment2};