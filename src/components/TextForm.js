import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleonChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoclick=()=>{
        let ntext=text.toLocaleLowerCase();
        setText(ntext)
    }
    const handleClearclick=()=>{
        let ntext='';
        setText(ntext)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); //for removing selected items when copy button is clicked
    }
    const handleExtraSpaces=()=>{
        let ntext=text.split(/[ ]+/);       // used regex here
        setText(ntext.join(" "));
    }
    const[text,setText]=useState('');
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>  
        <h3>{props.heading}</h3>   
       <div className="mb-3" >
       <textarea className="form-control"  value={text} onChange={handleonChange} style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to UpperCase</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoclick}>Convert to LowerCase</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearclick}>Clear</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0;
        }).length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h3>Text preview</h3>
        <p>{text.length>0?text:"Enter text in above textarea to preview it here."}</p>
    </div>
    </>
    )
}
