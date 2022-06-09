import { useState } from "react";
import React from "react";

function AddList() {

    const [List, SetList] = useState(['Item']);

    const ListHandler = () => {
        SetList([...List, "Item"]);
    }
    return (
        <div>
            <ul>
                {List.map((item, index) => {
                    return <li>{item + " " + index}</li>
                })}
            </ul>
            <button onClick={ListHandler}>Add List</button>
        </div>
    )

};

export default AddList;