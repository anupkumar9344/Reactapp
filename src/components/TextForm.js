import React, { useState } from 'react'

export const TextForm = (props) => {
    const handleUpClick =()=>{
        // console.log("Upercase");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleonClick =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here')
    return (
        <div className="mt-5">
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleonClick} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-info text-white mt-5 d-flex justify-content-center">Convert to Upercase</button>

        </div>
    )
}
export default TextForm;