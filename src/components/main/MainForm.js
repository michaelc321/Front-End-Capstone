import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "./MainProvider"
import { PhotoContext } from "../photos/PhotoProvider";
import "./Main.css"


export const MainForm = (props) => {
    const { addMain, updateMain, getMain, mains } = useContext(MainContext)
    const { addPhotos, updatePhotos, getPhotos, photos} = useContext(PhotoContext)


   
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

   
    const [main, setMain] = useState({})

    
    const editMode = props.match.params.hasOwnProperty("mainId") 

    const handleControlledInputChange = (event) => {
        const newMain = Object.assign({}, main)         
        newMain[event.target.name] = event.target.value     
        setMain(newMain)                                
    }

    const getMainInEditMode = () => {
        if (editMode) {
            const mainId = parseInt(props.match.params.mainId)
            const selectedMain = mains.find(c => c.id === mainId) || {}
            setMain(selectedMain)
        }
    }
    
    useEffect(() => {
        getMain()
        getPhotos()
    }, [])

    useEffect(() => {
        getMainInEditMode()
    }, [mains])


    const constructNewMain = () => {

        const userId = parseInt(localStorage.getItem("users"))


        if (editMode) {
            updateMain({
                name: main.title,
                details: main.medium,
                imageURL: main.imageURL,
                date: main.time,
                link: main.link,
                id: main.id,
                userId: userId
            })
                .then(() => props.history.push("/main"))
        } else {
            addMain({
                name: main.title,
                details: main.medium,
                imageURL: image,
                date: main.time,
                link: main.link,
                userId: userId
            })
                .then(saveImage())
                .then(() => props.history.push("/main"))
        }
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
        const file = await res.json()
        // const url = file.url
        setImage(file.secure_url)
        setLoading(false)

        
        
    }
    
    const saveImage = () => {
        const userId = parseInt(localStorage.getItem("users"))

            addPhotos({
                photo: image,
                link: main.link,
                userId: userId
            })
        }
        

    return (
        <>
        <form className="form--content">
            <fieldset>
                <h2 className="MainForm__title">{editMode ? "Update Main" : "Create Card"}</h2>
                {editMode 
                ? (<div className="Main__image">
                    <img src={main.imageURL} alt={main.title} style={{width: '300px', height:'300px'}} />
                </div>) : (
                    <div className="form-group">
                    <div className="photo-select"><label className="form-group" for="MainImage">Select Photo</label></div>
                    <input type="file" 
                            name="file" 
                            id="MainImage" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Upload an image"
                            onChange={uploadImage}
                            style={{display: 'none'}} />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img src={image} style={{width: '300px', height: '300px'}} alt="" />
                            )}
                </div>
                )}
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="MainTitle">Place Visited: </label>
                    <input type="text" name="title" id="MainTitle" required autoFocus className="form-control" 
                    placeholder="Enter Text"
                    defaultValue={main.name}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Details: </label>
                    <textarea type="text" name="medium" id="medium" required autoFocus className="form-control" 
                    placeholder="Enter Text"
                    defaultValue={main.details}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
            <input className="form-group" type="date" id="time" name="time"
            min="2020-01-01" max="2200-12-31" defaultValue={main.date} onChange={handleControlledInputChange}>     
            </input>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="MainLink">Website: </label>
                    <input type="text" name="link" id="MainLink" required autoFocus className="form-control" 
                    placeholder="Enter URL"
                    defaultValue={main.link}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewMain()
                }}
                className="form-group btn btn-primary ml-3">
                {editMode ? "Save Updates" : "Save New Main"}
            </button>
            <button onClick={() => props.history.push("/main")} className="form-group btn btn-primary ml-3">Cancel</button>
        </form>
        </>
    )
}