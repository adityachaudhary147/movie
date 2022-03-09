import React from 'react'
import { useState ,useEffect} from 'react';
import "./Card.css";
export default function Card({obj}) {
    const [cc,setCc]=useState(true);
    function handleClick()
    {
      console.log(cc);
        setCc(val=>(val?false:true));   
        console.log("insde");  
        console.log(cc);
           
    }
    useEffect(()=>{

    },[]);
    function convertType(input)
    {
      if(input=="movie")
      {
        return "Movie"
      }
      else if(input=="series")
      {
        return "Series"
      }
      else{
        return input;
      }
    }
  return (
    <div className='container'>
    <div className={cc?` card`:" upside card"}  onMouseEnter={handleClick} onMouseLeave={handleClick}>
      <div>
       <img className='poster' src={obj.Poster} />
       </div>
        <div>    
       
        
      
        <div className={cc?` info`:"info "} >
          
        <h1>{obj.Title}</h1>
        <h3></h3>
        <h3>Type: {convertType(obj.Type)}</h3>
        
        <div>
          <h4>Year: {obj.Year} </h4> 
          <a  className="linkimdb" href={`https://www.imdb.com/title/${obj.imdbID}`} >Link to IMDB</a>
          
          </div>
        </div> 
        </div>
    </div>
    </div>
  )
}
