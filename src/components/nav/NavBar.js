import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/main">Main</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/photos">Photos</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/finished">Finished</Link>
            </li>
            <li className="logout">
                <Link onClick={deleteItems} className="navbar__link" >Logout</Link>
             </li>

        </ul>
    )
}

const deleteItems = () => {
    localStorage.clear()
}