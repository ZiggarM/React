import React from "react"
import { ImLocation } from "react-icons/Im";

export default function Hero(props){
    return(
        <div className="container">
            <div className="imgDiv">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="bodyDiv">
                <span className="location"><ImLocation className="locIcon"/>{props.item.location}</span>
                <a className="gray inline" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}