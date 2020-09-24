import React, { useState, useEffect } from "react"


export const PhotoContext = React.createContext()

export const PhotoProvider = (props) => {
    const [photos, setPhotos] = useState([])

     const getPhotos = () => {
        return fetch("http://localhost:8088/photos")
            .then(res => res.json())
            .then(setPhotos)
    }

     const addPhotos = Photo => {
        return fetch("http://localhost:8088/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Photo)
        })
            .then(getPhotos)
    }

    const updatePhotos = (photo) => {
        return fetch(`http://localhost:8088/projects/${photo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photo)
        })
            .then(getPhotos)
    }


    return (
        <PhotoContext.Provider value={{
            photos, addPhotos, getPhotos, updatePhotos
        }}>
            {props.children}
        </PhotoContext.Provider>
    )
}