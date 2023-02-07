import React from "react";
import "./Home.css"

export default function Home(props){



    return(
        <div className="home-container">
            <h1>Quizzical</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vel reprehenderit maiores odit ipsam quaerat.</p>
            <button onClick={props.startGame} className="btn">Start Quizz</button>
        </div>
    )
}