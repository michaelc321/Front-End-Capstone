import React, { useContext, useEffect } from "react"
import { MainContext } from "./MainProvider"
import { Main } from "./Main"
import { PhotoContext } from "../photos/PhotoProvider";
// import "./Mains.css"

export const MainList = (props) => {

    const { main, getMain } = useContext(MainContext)
    const { photos, getPhotos } = useContext(PhotoContext)
    

    useEffect(() => {
        getMain()
        getPhotos()
    }, [])

    
    return (
        <>
            <div className="mainBtnTop">
            <button class="mainBtn" onClick={() => props.history.push("/projects/create")}>
                Add Project
            </button>
            </div>
        <div className="main">
                <h2 className="inProgress">In-Progress</h2>
            <article className="mainList">
    {main.map(main => {
            const image = photos.find(photos => photos.id === main.photoId) || {}
    return <Main key={main.id} main={main}  image={image}/>
        })
    }
            </article>
        </div>
        </>
    )
}