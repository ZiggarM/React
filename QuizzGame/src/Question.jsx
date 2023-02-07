import React from "react";


export default function Question(props){
    return (
        <section className="qBody">
                <h2>{props.q}</h2>
            <div>
                <p>{props.ans[0]}</p>
                <p>{props.ans[1]}</p>
                <p>{props.ans[2]}</p>
                <p>{props.ans[3]}</p>
            </div>
        </section>
    )
}