import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Application } from "./Application"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
// import "./Kennel.css"

export const MainOne = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("users")) {
                return (
                    <>
                        {/* <Route render={props => <NavBar {...props} />} /> */}
                        <Route render={props => <Application {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)