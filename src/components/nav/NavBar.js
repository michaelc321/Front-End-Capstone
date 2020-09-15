import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/main">Main</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Photos</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Finished</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">In-Progress</Link>
            </li>
        </ul>
    )
}