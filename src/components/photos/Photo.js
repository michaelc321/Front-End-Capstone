import React from "react"
import "./Photo.css"


// import "./Main.css"

export const Photo = ({ photo }) => (
    <>
    <section className="photoContent">
       <img className="imgURL2" src={photo.photo} />
    </section>
    </>
)