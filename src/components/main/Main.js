import React, { useState, useContext, useEffect } from "react"
import "../photos/Photo.css"
import { MainContext } from "./MainProvider";


// import "./Main.css"


export const Main = (props) => {
    const { deleteMain, updateMain } = useContext(MainContext)
    
return(

     <section className="mainContent" key={props.main.id}>
        <h3 className="Main__name">{props.main.name}</h3>
        <p className="details">{props.main.details}</p>
        <img className="imgURL" src={props.main.imageURL} />
        <button onClick={() => deleteMain(props.main.id)}>Delete</button>
        <button 
            onClick={() => {
                props.history.push(`/main/edit/${props.main.id}`)
            }}>Edit</button>
      </section>
    
)
}

