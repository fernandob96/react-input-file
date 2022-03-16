import React, { useRef, useState } from "react";

const InputFileScreen = () => {

  const inputFileRef = useRef(null)

  const [image, setImage] = useState({name:'', url:''})

  const handleClickRef = () => {
    inputFileRef.current.click()
  }

  const handleInputFile = (e) =>{
    if(e.target.files){
      setImage({
        name: e.target.files[0].name,
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  return(
    <>
      <div className="container p-5">
        <h1 className="text-center">React Input File</h1>
        <div className="my-3 inputFile d-flex justify-content-center align-items-center" onClick={handleClickRef}>
          <p className="m-0 fw-bolder">¡Click to upload a file!</p>
        </div>
        <input onChange={handleInputFile} type='file' id='file' ref={inputFileRef} accept="image/png, image/gif, image/jpeg"  style={{display: 'none'}}/>

        {image.url && 
        <div className="text-center">
          <p><span className="fw-bold">Uploaded file: </span>{image.name}</p>
          <div className="mw-100"><img className="img-fluid" src={image.url} /></div>
        </div>
        }
      </div>
    </>
  )
}

export default InputFileScreen;