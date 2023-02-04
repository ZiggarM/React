import React from "react";
import "./Die.css"



export default function Die(props){

    return (
        <div className="dice">
            <h2 className="die-face">{props.value}</h2>
        </div>
    )
}