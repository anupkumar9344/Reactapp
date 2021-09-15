import React, { useState } from 'react'

export const TextForm = (props) => {
    const handleUpClick =()=>{
        // console.log("Upercase");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleDownClick =()=>{
        // console.log("Upercase");
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleonClick =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <div className="mt-5">
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleonClick} id="myBox" rows="8"></textarea>
            </div>
            <span className="d-flex justify-content-center m-3">
                <button onClick={handleUpClick} className="btn btn-info text-white m-2 d-flex justify-content-center">Convert to Upercase</button>
                <button onClick={handleDownClick} className="btn btn-info text-white m-2 d-flex justify-content-center">Convert to Lowercase</button>
            </span>
        <div className="container-fluid my-3">
            <h1 className="mt-5 mb-1">Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes read.</p>
            <h1 className="mt-5 mb-1">Preview</h1>
            <p>{text}</p>
        </div>
        </div>
    )
}
export default TextForm;