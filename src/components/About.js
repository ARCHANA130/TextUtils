import React from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(56 74 104)':'white',
 
    }
  
  return (
   
    <div className='container'>
          <h1 className="my-3" style={ {color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Tools for analyzing text, such as sentiment analysis, keyword extraction, or summarization.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Automation</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Automation features for repetitive tasks, like bulk find-and-replace operations.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Customization</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            User-configurable settings and preferences to tailor the app to individual needs.
          </div>
            </div>
            </div>
        </div>
        </div>
  )
}
