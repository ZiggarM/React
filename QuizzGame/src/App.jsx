import { useState } from 'react'
import './App.css'
import Home from './Home'
import Game from './Game'


export default function App(){

const [gameState, setGameState] = useState(false)

function startGame(){ 
  return setGameState(prevState=> !prevState)
}

console.log(gameState)
  return(
    <div className="container">
      {
        gameState ?
        <Game /> :
        <Home startGame={startGame} />}
    </div>
  )
}