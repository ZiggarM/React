import React from "react"
import Navbar from "./Navbar"
import data from "./data"
import Cards from "./Cards"

export default function App(){
  const cards = data.map(item => {
    return(
      <Cards
      item={item}
      />  
    )
  })
  return(
    <div className="appContainer">
<Navbar />
{cards}
    </div>
  )
}
