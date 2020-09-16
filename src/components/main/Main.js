import React from "react"

// import "./Main.css"

export const Main = ({ main }) => (
    <>
    <section className="mainContent">
        <h3 className="Main__name">{main.name}</h3>
        <address className="Main__address">{main.textbox}</address>
        <div>{}</div>
        <div>{main.userId}</div>
        <div>{main.id}</div>
    </section>
    </>
)