import React from "react"
import "../photos/Photo.css"

// import "./Main.css"

export const Main = ({ main, image }) => (
    <>
    <section className="mainContent">
        <h3 className="Main__name">{main.name}</h3>
        <p className="details">{main.details}</p>
        <img className="imgURL" src={image.photo} />
    </section>
    </>
)