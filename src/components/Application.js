import React from "react"
import { Route } from "react-router-dom"
import { MainList } from "./main/MainList"
import { MainProvider } from "./main/MainProvider"
import { MainForm } from "./main/MainForm";

export const Application = (props) => {
    return (
        <>
           <MainProvider>
                <Route exact path="/main" render={
                    props => <MainList {...props} />
                } />

                <Route exact path="/projects/create">
                    <MainForm />
                </Route>
        </MainProvider>
        </>
    )
}