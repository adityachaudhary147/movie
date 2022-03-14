import { Card } from "../../../dist";


import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act,fireEvent } from "react-dom/test-utils";
// import userEvent from '@testing-library/user-event'
let container=null;
const val={Poster: 'https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
Title: 'Breaking Bad',
Type: 'series',
Year: '2008–2013',
imdbID: 'tt0903747'};
beforeEach(()=>{
  container=document.createElement("div");
  document.body.appendChild(container);

})

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container=null;
  

})

it("renders with or without a name", () => {
    act(() => {
      render(<Card  obj={val} />, container);
    });
    expect(container.querySelector('.linkimdb').textContent).toBe("Link to IMDB");
    //"It means Card is imported correctly 
    expect(container.querySelector('.info').querySelector('p').textContent).toBe(val.Title);  
    
  });