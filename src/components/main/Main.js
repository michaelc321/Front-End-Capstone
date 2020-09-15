import React from "react"

// import "./Main.css"

export const Main = ({ main }) => (
    <>
    <section className="main">
        <h3 className="Main__name">{main.name}</h3>
        <address className="Main__address">{main.feature}</address>
    </section>
    </>
)