import React from "react"
import { Route } from "react-router-dom"
import { MainList } from "./main/MainList"
import { MainProvider } from "./main/MainProvider"
import { MainForm } from "./main/MainForm";
import { PhotoList } from "./photos/PhotoList";
import { PhotoProvider } from "./photos/PhotoProvider";


export const Application = () => {
    return (
        <>

        <MainProvider>
            <PhotoProvider>
                 <Route exact path="/main" render={(props) => {
                     return <>
                        <MainList history={props.history} />
                        </>
                }} />
                </PhotoProvider>
        </MainProvider>

        <MainProvider>
            <PhotoProvider>
                <Route path="/projects/create" render={(props) => {
                    return <MainForm {...props} />
                }} />
                </PhotoProvider>
        </MainProvider>
        
        <MainProvider>
            <PhotoProvider>

            <Route path="/main/:mainId(\d+)" render={ props => 
                        <MainList {...props} />
                        } />

            <Route path="/main/edit/:mainId(\d+)" render={(props) => {
                return <MainForm {...props} />
            }} />
            </PhotoProvider>
        </MainProvider>

        <PhotoProvider>
                 <Route exact path="/photos" render={(props) => {
                    return <PhotoList history={props.history} />
                }} />
        </PhotoProvider>
        </>
    )
}