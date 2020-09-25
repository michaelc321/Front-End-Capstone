// import React, { useContext, useEffect } from "react"
// import { Link } from "react-router-dom"
// import "./NavBar.css"
// import { beach } from "../images/beach.png";
// import { Button } from 'react-bootstrap';
// import { UserContext } from "../users/UserProvider";


// export const NavBar = (user) => {
  
//     return (
//         <>
//         <ul className="navbar">
//             <div className="cursive">
//                 <div className="cursive">VacaPlus</div>
//         <img src={require('../images/beach.png')} style={{width: '120px', height: '120px'}} />
//         </div>
//             <div className="logout">
//                 <Link onClick={deleteItems} className="moveBtn navbar__link" ><Button variant="info">Logout</Button>{' '}</Link>
//              </div>

//         </ul>
//         </>
//     )
// }

// const deleteItems = () => {
//     localStorage.clear()
// }