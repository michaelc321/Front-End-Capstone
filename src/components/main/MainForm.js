import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "./MainProvider"


export const MainForm = (props) => {
    const { addMain, updateMain, getMain, mains } = useContext(MainContext)


   
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
    }, [])

    useEffect(() => {
        getMainInEditMode()
    }, [mains])


    const constructNewMain = () => {

        const userId = parseInt(localStorage.getItem("project"))


        if (editMode) {
            updateMain({
                name: main.title,
                details: main.medium,
                imageURL: main.imageURL,
                id: main.id
            })
                .then(() => props.history.push("/main"))
        } else {
            addMain({
                name: main.title,
                details: main.medium,
                imageURL: image,
                userId: userId
            })
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
        const url = file.url
        setImage(file.secure_url)
        setLoading(false)


        const photo = {
            photo: url
        }
        
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
        <>
        <form>
            <fieldset>
                <h2 className="MainForm__title">{editMode ? "Update Main" : "Create Project"}</h2>
                {editMode 
                ? (<div className="Main__image">
                    <img src={main.imageURL} alt={main.title} style={{width: '300px', height:'300px'}} />
                </div>) : (
                <div className="form-group">
                    <label htmlFor="MainImage">Image: </label>
                    <input type="file" 
                            name="file" 
                            id="MainImage" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Upload an image"
                            onChange={uploadImage} />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img src={image} style={{width: '300px'}} alt="" />
                            )}
                </div>
                )}
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="MainTitle">Project Name: </label>
                    <input type="text" name="title" id="MainTitle" required autoFocus className="form-control" 
                    placeholder="Enter Text"
                    defaultValue={main.title}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Details: </label>
                    <textarea type="text" name="medium" id="medium" required autoFocus className="form-control" 
                    placeholder="Enter Text"
                    defaultValue={main.medium}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button onClick={() => props.history.push("/main")} className="btn btn-primary ml-3">Cancel</button>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewMain()
                }}
                className="btn btn-primary ml-3">
                {editMode ? "Save Updates" : "Save New Main"}
            </button>
        </form>
        </>
    )
}