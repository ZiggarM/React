import React from "react"


export default function Hero(props){
    return(
        <div className="container">
            <div className="imgDiv">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="bodyDiv">
                <span className="location">{props.item.location}</span>
                <p className="gray inline">{props.item.googleMapsUrl}</p>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}