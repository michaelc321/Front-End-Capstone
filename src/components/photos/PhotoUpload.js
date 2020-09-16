import React, { useContext, useState } from 'react';


export const PhotoUpload = (props) => {
    
 

        const [fileInputState, setFileInputState] = useState('')
        const [previewSource, setPreviewSource] = useState('')
        const [selectedFile, setSelectedFile] = useState('')
        const handleFileInputChange = (e) => {
            const file = e.target.files[0]
            previewFile(file)
        }

        const previewFile = (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setPreviewSource(reader.result)
            }
        }

        const handleSubmitFile = (e) => {
            console.log("submitting")
            e.preventDefault()
            if(!previewSource) return;
            uploadImage(previewSource)
        }

        const uploadImage = (base64EncodedImage) => {
            console.log(base64EncodedImage)
            return fetch('http://localhost:8088/photos', {
                    method: 'POST',
                    body: JSON.stringify({data: base64EncodedImage}),
                    headers: {'Content-type': 'application/json'}
                })
            }
        

    return (
        <div className="formUploadDivMain">
        <form className="formUpload" onSubmit={(handleSubmitFile)}>
            <input className="form-input" 
                    type="file" 
                    name="image" 
                    onChange={handleFileInputChange} 
                    value= {fileInputState}  />
            <input className="formSubmit" type="submit" />
            <div className="formUploadDiv">
                   {previewSource && (
                    <img class="formImage" src={previewSource} alt="chosen" />
                    )}
            </div>
        </form>
            </div>
    )
}