import { createContext, useState} from "react";
import Parent from "./Project/LoginPage/Library/Parent";
import Login from "./Project/LoginPage/Login/Login";


const GlobalContext = createContext();

function App ( ) {
 const [value1 , setvalue1]  = useState(true);
 const [value2, setvalue2] = useState("");
 const [value3 , setvalue3] = useState("")

    return (
        <GlobalContext.Provider value={{value1,setvalue1,value2,setvalue2,value3 , setvalue3}}>
             <Login key="1"></Login>
             <Parent key="2"></Parent>
        </GlobalContext.Provider>
    )
}


export {App, GlobalContext};