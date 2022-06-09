import React from "react";
import Child from "./Child";


const Parent = () => {
  
    const movie_List = [
        {
           MovieName : "RRR",
           description : "Action Movie",
           Buy :"BUY"
        },
        {
            MovieName : "Bhahubali",
            description : "Historiacal Movie",
            Buy :"BUY"  
        },
        {
            MovieName : "KGF",
            description : "Historiacal Movie & Action Movie",
            Buy :"BUY"  
        }
    ];

    return (  
        movie_List.map((item,index) => {
         return <Child key={index} itemdata ={item} ></Child>
    })
    )
};


export default Parent;