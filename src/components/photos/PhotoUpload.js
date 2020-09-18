import React, { useState } from 'react';
import {  } from "./PhotoProvider";


export const PhotoUpload = () => {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState([])

    const downloadImage = () => {
        const get = fetch ('https://api.cloudinary.com/v1_1/db1peeart/image/upload')
        .then (res => res.json())
        .then (setPhoto)
        console.log(setPhoto)
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'Michael')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/db1peeart/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file= await res.json()
        const url = file.url
        console.log(data)
       
        

        setImage(file.secure_url)
        setLoading(false)
        
        const photo = {
            photo: url
        }
        
        
        console.log(photo)

        
        const imageUrl = (photo) => {
            return fetch("http://localhost:8088/photos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(photo)
                
            })
        }
        return imageUrl(photo)
        
    }
    


    

    return (

        <div className="upload">
            <h2>Create Project</h2>
            <small>Display an Image, Name, and add some Details.</small>
            <input className="buttonStyle"
                    type="file"
                    name="file"
                    id="file"
                    className="hide"
                    placeholder="Upload an Image"
                    onChange={uploadImage} />
            <label for="file" className="button-style">Add Photo!</label>
            {loading ? (
                <h3>Loading...</h3>
            ): (
                <img src={image} style={{width: '300px', height: '300px'}} />
            )
            }
            <div onChange={downloadImage}></div>
        </div>
    )
 

}