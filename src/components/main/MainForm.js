import React, { useContext, useRef, useEffect } from "react"
import { MainContext } from "./MainProvider"
import { PhotoContext } from "../photos/PhotoProvider"
import { PhotoUpload } from "../photos/PhotoUpload";
import "./Main.css"



export const MainForm = (props) => {
    const { addMain } = useContext(MainContext)
    const { photos, getPhotos } = useContext(PhotoContext)
   

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const details = useRef(null)
    const photo = useRef(null)
    

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getPhotos()
    }, [])


    const createNewCard = (props) => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const photoId = parseInt(photo.current.value)
        

        if (photoId === 0) {
            window.alert("Please select an Image")
        } else {
            addMain({
                name: name.current.value,
                details: details.current.value,
                photoId
            })
            // .then(() => props.history.push("/main"))
        }
    }
    return (
<form className="main">
    <div>{PhotoUpload()}</div>
    <div className="newProjBox">
<h2 className="mainForm__title">New Project</h2>
<fieldset className="field">
    <div className="form-group">
        <label htmlFor="mainName">Project Name: </label>
        <input type="text" id="mainName" ref={name} required autoFocus className="form-control" placeholder="Enter Text" />
    </div>
</fieldset>
<fieldset className="field">
    <div className="form-group">
        <label htmlFor="mainName">Details </label>
        <textarea type="text" id="mainName" ref={details} required autoFocus className="textArea" placeholder="Enter Text" />
    </div>
</fieldset>
<fieldset className="field">
    <div className="form-group">
        <label htmlFor="location">Assign Uploaded Photo: </label>
        <select defaultValue="" name="location" ref={photo} id="mainLocation" className="form-control" >
            <option value="0">Select Image</option>
            {photos.map(e => (
                <option key={e.id} value={e.id}>
                    {e.photo}
                </option>
            ))}
        </select>
    </div>
</fieldset>
<button type="submit"
    onClick={evt => {
        evt.preventDefault() // Prevent browser from submitting the form
        createNewCard()
        
    }}
    className="btn btn-primary">
    Save Project
</button>
</div>
</form>
        )
    }
    
    

// <div>
// <form className="formAll" onSubmit={(handleSubmit(onSubmit))}>
//     <input className="formName" type="text" placeholder="Name of Project" name="name" ref={register} />
//     <textarea className="formText" type="text" placeholder="Enter Details" name= "textbox" ref={register} />
//     <input className="formSubmit" type="submit"  />
// </form>
//     </div>