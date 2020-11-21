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
    <>
    <div id="navigation">
    <button type="button" onClick={()=>{
        if(index==0) disabled = true;
        else setIndex(index-1);
      }}>previous</button>
      <button type="button" onClick={()=>{
        if(index==slides.length-1) disabled=true;
        else setIndex(index+1);
      }}>Next</button>
      
    </div>
    {/* <slideShow sl={slides[0]}/> */}
    
    <div id="slide">
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
    </div>
    </>
  )
}


export default App;
