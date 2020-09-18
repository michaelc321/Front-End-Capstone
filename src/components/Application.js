import React from "react"
import { Route } from "react-router-dom"
import { MainList } from "./main/MainList"
import { MainProvider } from "./main/MainProvider"
import { MainForm } from "./main/MainForm";
import { UserProvider } from "./users/UserProvider";
import { PhotoList } from "./photos/PhotoList";
import { PhotoProvider } from "./photos/PhotoProvider";

export const Application = (props) => {
    return (
        <>
           <MainProvider>
               <UserProvider>
                   <PhotoProvider>
                <Route exact path="/main" render={
                    props => <MainList {...props} />
                } />

                <Route exact path="/photos" render={
                    props => <PhotoList {...props} />
                } />

                <Route exact path="/projects/create">
                    
                    <MainForm />
                </Route>
                 </PhotoProvider>
                </UserProvider>
        </MainProvider>
        </>
    )
}