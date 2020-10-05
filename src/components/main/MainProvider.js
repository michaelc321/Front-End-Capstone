import React, { useState, useEffect } from "react"


export const MainContext = React.createContext()

export const MainProvider = (props) => {
    const [mains, setMain] = useState([])
    const [searchTerms, setTerms] = useState("")
   

    useEffect(() => {
        getMain()
    }, [])

    

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

    const getMainById = (id) => {
        return fetch(`http://localhost:8088/projects/${id}`)
    }

    const deleteMain = mainId => {
        return fetch(`http://localhost:8088/projects/${mainId}`, {
            method: "DELETE"
        })
            .then(getMain)
    }

    const updateMain = (main) => {
        return fetch(`http://localhost:8088/projects/${main.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(main)
        })
            .then(getMain)
    }

    return (
        <MainContext.Provider value={{
            mains, addMain, getMain, deleteMain, getMainById, updateMain, searchTerms, setTerms
        }}>
            {props.children}
        </MainContext.Provider>
    ) 
}