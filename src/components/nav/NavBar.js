import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { beach } from "../images/beach.png";
import { Button } from 'react-bootstrap';



export const NavBar = () => {
    return (
        <>
        <ul className="navbar">
        <img src={require('../images/beach.png')} style={{width: '120px', height: '120px'}} />
            <li className="navbar__item active">
                <Link className="navbar__link" to="/main"></Link>
            </li>
            <div className="logout">
                <Link onClick={deleteItems} className="navbar__link" ><Button variant="info">Logout</Button>{' '}</Link>
             </div>

        </ul>
        </>
    )
}

const deleteItems = () => {
    localStorage.clear()
}