import React, { useContext, useEffect } from "react"
import { MainContext } from "./MainProvider"
import { Main} from "./Main"
import { PhotoContext } from "../photos/PhotoProvider";
// import "./Mains.css"

export const MainList = (props) => {

    const { mains, getMain } = useContext(MainContext)
    const { photos, getPhotos } = useContext(PhotoContext)
    

    useEffect(() => {
        getMain()
        getPhotos()
    }, [])

    
    return (
        <>
                <h1 className="title">Project Name</h1>
            <div className="mainBtnTop">
            <button class="mainBtn" onClick={() => props.history.push("/projects/create")}>
                Add Project
            </button>
            </div>
        <div className="main">
                <h2 className="inProgress">In-Progress</h2>
            <article className="mainList">
    {mains.map(main => <Main key={main.id} main={main}{...props}/>)
    }
            </article>
        </div>
        </>
    )
}



