import React, { useState, useContext, useEffect } from "react"
import "./Photo.css"
import { PhotoContext } from "./PhotoProvider";


// import "./Main.css"

export const Photo = ({ photo, props }) => {

    const { deleteMain } = useContext(PhotoContext)

return(
    <>
    <section className="photoContent">
      <a href={photo.link}>
       <img className="imgURL2" src={photo.photo} />
       </a>
    </section>
       </>
)
}