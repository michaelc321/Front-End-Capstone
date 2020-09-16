import React from "react"
import { Route } from "react-router-dom"
import { MainList } from "./main/MainList"
import { MainProvider } from "./main/MainProvider"
import { MainForm } from "./main/MainForm";
import { UserProvider } from "./users/UserProvider";
import { PhotoUpload } from "./photos/PhotoUpload";

export const Application = (props) => {
    return (
        <>
           <MainProvider>
               <UserProvider>
                <Route exact path="/main" render={
                    props => <MainList {...props} />
                } />

                <Route exact path="/projects/create">
                    <PhotoUpload />
                    <MainForm />
                </Route>
                </UserProvider>
        </MainProvider>
        </>
    )
}