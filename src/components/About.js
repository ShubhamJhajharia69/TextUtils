import React, { useState } from 'react';
export default function About(props) {
   /* const[myStyle,setmyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
    })

const[btn,newBtn]=useState('Enable Dark Mode')

    const changeMode=()=>{
        if(myStyle.color==='black'){
        setmyStyle({
            color:'white',
            backgroundColor: 'black',
            border:'1px solid white'
        })
        newBtn('Enable Light Mode')
    }
        else{
            setmyStyle({
                color:'black',
                backgroundColor: 'white'
                
            })
            newBtn('Enable Dark Mode')
        }
    }
   */
  //for enabling dark mode in about
  let myStyle={
    color:props.mode==='dark'?'white':'#3e2727',
    backgroundColor: props.mode==='dark'?'#3e2727':'white'
  }
  return <div className="container my-2" style={myStyle} >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>


  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>ANALYZE YOUR TEXT</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text Utils gives you a way to analyze your text quickly and efficently.Be it character count,word count, Changing to uppercase or lowercase,removing extra spaces 
      and copying the whole text.
      </div>
    </div>
  </div>


  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>FREE TO USE</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtil is a free character counter tool that provides instant character count and word count statistics for a given text.Textutil reports the given
       words and characters.Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>


  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>BROWSER COMPATIBLE</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This tool/software works in any web browser such as chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count characters in facebook,blogs,
        books,Excel,pdf documents,Essays etc.
      </div>
    </div>
  </div>
</div>
{/*<button onClick={changeMode} type='button' className="btn btn-primary my-3" > {btn}</button>*/}
  </div>
}
