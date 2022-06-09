import {useState} from 'react';
import './style.css'

function Counting(){
    const [count , Setcount] = useState(0) 
  function decrementCount(){
    Setcount(previousCount => previousCount-1); 
      
  }
  function incrementCount(){     
    Setcount(previousCount  => previousCount+1);
  }

  return (
     <div class='container'>
     <button onClick={incrementCount}>Increment</button>
     <span>{count}</span>  
     <button onClick={decrementCount}>Decrement</button>
     </div>
  );
};

export default Counting;