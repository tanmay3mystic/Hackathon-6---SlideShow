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
  const [index  , setIndex]=useState(0);
  
  


  
  return (

    <div className="App">
      <div id="navigation">
        <button disabled={index==0} data-testid="button-restart" onClick={()=>(setIndex(0))}>
          Restart
        </button>
        <button data-testid="button-next" disabled={index==slides.length-1} onClick={()=>(setIndex(index+1))}>
          Next
        </button>
        <button data-testid="button-prev" disabled={index==0} onClick={()=>(setIndex(index-1))}>
          Prev
        </button>
      </div>

      <div id="slide">
         <h1  data-testid="title">{slides[index].title}</h1>
         <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}


export default App;
