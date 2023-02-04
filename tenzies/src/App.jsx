import React from "react";
import ReactDom from "react-dom/client"
import Die from "./Die";

import "./App.css"

export default function App(){

function dieValue(){
    return Math.floor(Math.random() * 6)+1

}


    return (
        <main >
            <div className="container">
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            <Die value= {dieValue()}/>
            </div>
        </main> 
    )
}