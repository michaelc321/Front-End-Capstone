import React, { useContext, useEffect, useState } from "react"
import { PhotoContext } from "./PhotoProvider"
import { Photo } from "./Photo"
import { UserContext } from "../users/UserProvider"
// import "./Photos.css"

export const PhotoList = () => {

    const { photos, getPhotos } = useContext(PhotoContext)

    const [ userPhotos, setUserPhotos ] = useState([])
    

    useEffect(() => {
        getPhotos()
    }, [])

    useEffect(() => {
        const filter = photos.filter(m => m.userId === parseInt(localStorage.getItem("users")))
        setUserPhotos(filter)
    }, [photos])
    
    return (
        <>
        <div className="Photo">
            <article className="PhotoList">
                {userPhotos.map(photo => <Photo key={photo.id} photo={photo} />)}
            </article>
        </div>
        </>
    )
}