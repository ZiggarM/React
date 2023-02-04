import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"

import "./App.css"

export default function App(){

    const [dice, setDice] = React.useState(allNewDice())
    
   const diceElements = dice.map(die => <Die
    key = {die.id}
    value = {die.value}
    isHeld= {die.isHeld}
    id = {die.id}
    holdDice = {() => holdDice(die.id)}
      />)
  
function allNewDice(){
    const newDice = []
        for(let i =0; i <10; i++){  
            const obj = {value: Math.ceil(Math.random() * 6), isHeld: false, id:nanoid()}
            newDice.push(obj)
        }
        return newDice
}


function holdDice(id){
    setDice(prevState => {
        return prevState.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        })
    })
}

function rollDice(){
    setDice(allNewDice())
}

    return (
        <main >
            <div className="container">
            {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main> 
    )
}