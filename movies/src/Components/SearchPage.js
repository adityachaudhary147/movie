import { SearchButton } from 'lib-movies';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './Cards';
import './SearchPage.css';
export default function SearchPage() {


    const [state,setState]=useState("");
    const [st,setSt]=useState([]);
    const [isloading,setisloading]=useState(false);
    const [isError,setIsError]=useState(false);
    function hello()
    {
      setIsError(false)
      console.log("clicked hello");
      setisloading(true);
      setSt([]);
      fetch(`https://www.omdbapi.com/?s=${state}&apikey=d782e0cd`)
      .then(res=>{
          setisloading(false);
        res.json().then(
          data=>{
            console.log(data);
            setSt([...data.Search]);
  
          }
        ).catch(e=>{
          setIsError(true);
        })
      }).catch(e=>{
        setIsError(true);
      })
      return;
      
    }
    function inputChange(e)
    {
      setState(e.target.value); 
    }
    function checkenter(e)
    {
      if(e.code=='Enter')
      {
        hello();
      }
    }
    useEffect(()=>{
  
    },[st,state]);
  
  return (
      <>
    <div className='search-bar-container'>
      <div className={`search-bar ${st.length && "normal"}`} >
      
    <input   className="input" value={state} placeholder='Search any Movie web Series ...' onChange={inputChange} onKeyDown={checkenter} />
   
    <div>
      <SearchButton  label="hello" handleSearch={hello}></SearchButton>
    </div>
    </div>
    
    </div>
    <div className='main-screen'>
        <div>
    {isloading && "loading"}
    { isError ? "There is some Error No Data Found": <Cards st={st}></Cards>}
    
    </div>
    </div>
    </>
  )
}
