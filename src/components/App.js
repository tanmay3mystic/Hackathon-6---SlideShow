import React, {Component, useState} from "react";
import '../styles/App.css';

// const slideShow=({sl})=>{
//   return(
//     <div id="slide">
//       <h1 data-testid="title">{sl.title}</h1>
//       <p data-testid="text">{sl.text}</p>
//     </div>
//   )
    
// }

const App = ({slides}) => {
  const [index , setIndex]=useState(0);
  const [currentSlide , setCurrentSlide]=useState(slides[index]);
 
  return (
    <div className="App">
    <div  id="navigation">
    <button type="button" disabled={index==0} data-testid="button-restart" onClick={()=>{
         setIndex(0);
         setCurrentSlide(slides[index]);
      }}>Restart</button>

     <button type="button" disabled={index==slides.length-1} data-testid="button-next" onClick={()=>{
        setIndex(index+1);
        setCurrentSlide(slides[index]);
      }}>Next</button>

    <button type="button"  disabled={index==0} data-testid="button-prev" onClick={()=>{
        setIndex(index-1);
        setCurrentSlide(slides[index]);
      }}>Prev</button>
 
    </div>
    {/* <slideShow sl={slides[0]}/> */}
    
    <div id="slide">
      <h1 data-testid="title">{currentSlide.title}</h1>
      <p data-testid="text">{currentSlide.text}</p>
    </div>
    </div>
  )
}


export default App;
