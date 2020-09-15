import React, { useState, useEffect } from "react"


export const MainContext = React.createContext()

export const MainProvider = (props) => {
    const [main, setMain] = useState([])

    const getMain = () => {
        return fetch("http://localhost:8088/projects")
            .then(res => res.json())
            .then(setMain)
    }

    const addMain = main => {
        return fetch("http://localhost:8088/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(main)
        })
            .then(getMain)
    }

    return (
        <MainContext.Provider value={{
            main, addMain, getMain
        }}>
            {props.children}
        </MainContext.Provider>
    )
}