import React, { useContext, useEffect } from "react"
import { MainContext } from "./MainProvider"
import { Main } from "./Main"
import { UserContext } from "../users/UserProvider"
// import "./Mains.css"

export const MainList = (props) => {

    const { main, getMain } = useContext(MainContext)
    

    useEffect(() => {
        getMain()
    }, [])

    
    return (
        <>
            <div className="mainBtnTop">
            <button class="mainBtn" onClick={() => props.history.push("/projects/create")}>
                Add Project
            </button>
            </div>
        <div className="main">
            <article className="employeeList">
                {main.map(main => <Main key={main.id} main={main} />)}
            </article>
        </div>
        </>
    )
}