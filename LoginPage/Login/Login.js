import { useContext } from "react";
import { GlobalContext } from "../../../App";
import "./style.css"

function Login ()  {
   const {value1,setvalue1,value2,setvalue2,value3 , setvalue3}= useContext(GlobalContext)
   const LoginHandler = ( ) => {
       setvalue1(false);
       
   }
   const InputHan = (event) => {
     
      setvalue2(event.target.value);
   }
   const PassHandle = (e) => {
    setvalue3(e.target.value)
   }
    return (
         <div className="Login" id={value1===true ? "Login" : "Logo"}>
             <div>
             <label htmlFor="Input">User Name :</label><input type="text" id='Input' placeholder="Enter UserName" onChange={InputHan} value={value2} ></input>
             </div>
             <div>
             <label htmlFor="Password">User Name :</label><input type="password" id='Password' placeholder="Enter Password" value={value3} onChange={PassHandle}></input>
             </div>
             <button onClick={LoginHandler}>Log In</button>
         </div>       
    )
}

export default Login;