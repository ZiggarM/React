import React, { useState } from "react";
import "./Game.css"
import "./Question"
import Question from "./Question";
export default function game(){



    const [questions, setQuestions] = useState([])

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
        q={q.question}
        ans={[...q.incorrect_answers,q.correct_answer]}
        />
    ))

    return(
        <section className="game-container">
            {createGame}
                <button className="btn game-btn">Check Answers</button>
        </section>
    )
}