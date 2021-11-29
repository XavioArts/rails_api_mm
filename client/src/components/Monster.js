import React from "react";
import MonForm from "./MonForm";

const Monster = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Type: {props.mon_type}</p>
            <p>Health Points: {props.life}</p>
            <p>Challenge Rating: {props.cr}</p>
        </div>
    )
};

export default Monster;