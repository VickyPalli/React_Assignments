import React from "react";


function Child (prop) {

 return(
          <ul  className='List'>
                <li className="Item">Name : {prop.Itemdata.Name}</li>
                <li className="Item"> Title :{prop.Itemdata.Title}</li>
                <li className="Item"> Author :{prop.Itemdata.Author}</li>
            </ul>
    )
}


export default Child;