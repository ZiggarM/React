import React from "react"
import { IoMdGlobe } from "react-icons/Io";

export default function Navbar(){
    return(
        <nav className="Navbar">
            <IoMdGlobe className="globe"/>
            <h1 className="title">My travel journal</h1>
            
        </nav>
    )
}