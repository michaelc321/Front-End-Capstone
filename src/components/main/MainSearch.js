import React, { useContext } from "react"
import { MainContext } from "./MainProvider"

export const MainSearch = () => {
    const { setTerms } = useContext(MainContext)

    return (
        <>
            <input className="search" type="text"
            onChange={
                (changeEvent) => {
                    setTerms(changeEvent.target.value)
                }
            }
             placeholder="Search..." 
             results="0" />
        </>
    )
}