import React, {useState} from 'react'

export default function TextForm(props) {


    //function to convert lower case to uppercase on click
    const handleUpClick = ()=> {
        console.log("Upper case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=> {
        console.log("Lower case was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    

    //Function to handle chnagess mad in text area
    const Changed = (event)=>{
        setText(event.target.value)     // Updating the state with the new value from the textarea
    }

    const [text, setText]=useState("Enter the text");




    const [style1, setMyStyle1]=useState({
        backgroundColor: 'white',
        color: 'black'
    })

    const [btnText, setbtnText]=useState('Enable Dark Mode')

    const Toggle = ()=> {
        if(style1.backgroundColor === 'white'){
            setMyStyle1({
                backgroundColor: 'black',
                color: 'white'
            })
            setbtnText('Enable Light Mode')
        }
        else{
            setMyStyle1({
                backgroundColor: 'white',
                 color: 'black'
            })
            setbtnText('Enable Dark Mode')
        }
    }
   
    
  return (
    <>
    <div className="container" style={style1}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text}  onChange={Changed} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick} >
            Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2"   onClick={handleLowClick} >
            Convert To Lowercase
        </button>
        <button  onClick={Toggle} type='button' className="btn btn-primary" >
            {btnText}
        </button>


    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>Reading Minutes = {0.008 * text.split(" ").length} mins</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
