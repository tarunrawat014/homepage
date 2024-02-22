import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        //console.log("uppercase was clicked", + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        //console.log("uppercase was clicked", + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    //setText("gjhjhkjkj");

return (
        <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#020833"}}>

       {/* <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

<div className="mb-3">
    <h1> {props.heading} </h1>
  <textarea className="form-control"  value={text}  onChange={handleOnChange} 
  style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"#020833"}} 
  id="MyBox" rows="8"></textarea>
</div>

<button className="btn btn-primary " onClick={handleUpClick}>
    Convert to Uppercase
</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>
    Convert to Lowercase
</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#020833"}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} minute read </p>

        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter something to preview it here"} </p>
    </div>
 </>
  )
}
