import React, { useContext, useEffect } from "react"
import { PhotoContext } from "./PhotoProvider"
import { Photo } from "./Photo"
import { UserContext } from "../users/UserProvider"
// import "./Photos.css"

export const PhotoList = () => {

    const { photos, getPhotos } = useContext(PhotoContext)
    

    useEffect(() => {
        getPhotos()
    }, [])

    
    return (
        <>
        <div className="Photo">
            <article className="PhotoList">
                
                {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
            </article>
        </div>
        </>
    )
}