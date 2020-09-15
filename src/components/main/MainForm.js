import React from 'react';
import { useForm } from "react-hook-form";

export const MainForm = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name of Project" name="name" ref={register} />
            <input type="text" placeholder="Description" name="des" ref={register} />
            <input type="submit"  />
        </form>
    )
}