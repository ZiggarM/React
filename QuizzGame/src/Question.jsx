import React from "react";


export default function Question(props){
    const style ={
        backgroundColor: props.isGameOver && "#94D7A2"
    }
    const noStyle={
        backgroundColor: props.isGameOver && ""
    }
    console.log(props.correct_answer)
    return (
        <section className="qBody">
                <h2>{props.q}</h2>
            <div>
                <p style={props.ans[0]===props.correct_answer ?style : noStyle}>{props.ans[0]}</p>
                <p style={props.ans[1]===props.correct_answer ?style : noStyle}>{props.ans[1]}</p>
                <p style={props.ans[2]===props.correct_answer ?style : noStyle}>{props.ans[2]}</p>
                <p style={props.ans[3]===props.correct_answer ?style : noStyle}>{props.ans[3]}</p>
            </div>
        </section>
    )
}