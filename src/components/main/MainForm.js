import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { MainContext } from "./MainProvider";
import "./Main.css"

export const MainForm = (props) => {
    const {register, handleSubmit} = useForm()
    const {getMain} = useContext(MainContext)
    
  
    const onSubmit = (data) => {
        console.log(data)
        return fetch("http://localhost:8088/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(getMain)
        }


    return (
        <div>
        <form className="formAll" onSubmit={(handleSubmit(onSubmit))}>
            <input className="formName" type="text" placeholder="Name of Project" name="name" ref={register} />
            <textarea className="formText" type="text" placeholder="Enter Details" name= "textbox" ref={register} />
            <input className="formSubmit" type="submit"  />
        </form>
            </div>
    )
}