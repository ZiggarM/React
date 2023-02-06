import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import "./App.css"

export default function App(){

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    

    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        allHeld && allSameValue ? setTenzies(true) : setTenzies(false)
    }, [dice])


   const diceElements = dice.map(die => <Die
    key = {die.id}
    value = {die.value}
    isHeld= {die.isHeld}
    id = {die.id}
    holdDice = {() => holdDice(die.id)}
      />)
  

function generateNewDice(){
   return {
    value: Math.ceil(Math.random() * 6),
     isHeld: false,
      id:nanoid()
    }
}

function allNewDice(){
    const newDice = []
        for(let i =0; i <10; i++){  
            newDice.push(generateNewDice())
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
    setDice(prevDice => {
        return prevDice.map(die => {
            return die.isHeld ? die : generateNewDice()
        })
    })
}
function newGame(){
   return setDice(allNewDice)
}

    return (
        <main >
            <div className="informations">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            {tenzies && <p>You win</p>}
            </div>
            <div className="container">
            {diceElements}
            </div>
            {tenzies && <Confetti />}
            {tenzies ?
            <button className="roll-dice" onClick={newGame}>New Game</button> :
             <button className="roll-dice" onClick={rollDice}>Roll</button>}
        </main> 
    )
}