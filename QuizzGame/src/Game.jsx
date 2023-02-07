import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./Game.css"
import "./Question"
import Question from "./Question";


export default function game(){
    const [questions, setQuestions] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)

    React.useEffect(()=>{
        async function getQuestions(){
            const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            const recievedData = await res.json()
            setQuestions(recievedData.results)
        }
        getQuestions()
    }, [])

    const createGame = questions.map(q => (
        <Question
        key={nanoid()}
        id={nanoid()}
        q={q.question}
        ans={[...q.incorrect_answers,q.correct_answer].sort((a, b) => 0.5 - Math.random())}
        isGameOver={isGameOver}
        correct_answer={q.correct_answer}
        />
    ))

    function gameOver(){
        setIsGameOver(true)
    }

    return(
        <section className="game-container">
            {createGame}
                <button onClick={gameOver} className="btn game-btn">Check Answers</button>
        </section>
    )
}