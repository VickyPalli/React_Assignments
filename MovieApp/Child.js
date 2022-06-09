import React from "react";


const Child = (props) => {
   
    const Buying = () => {
        console.log(props.itemdata.MovieName+"Movie has");
    }


    return (
        <ul>
            <li>{props.itemdata.MovieName}</li>
            <li>{props.itemdata.description}</li>
            <li onClick={Buying}>{props.itemdata.Buy}</li>
        </ul>
    )
}

export default Child;