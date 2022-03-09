
import React from "react";
import nock from "nock";


import { render, unmountComponentAtNode } from "react-dom";
import { act,fireEvent } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event'

import SearchPage from './SearchPage';
const val=[{Poster: 'https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
Title: 'Breaking Bad 6767',
Type: 'series',
Year: '2008–2013',
imdbID: 'tt0903747'}];
let container = null;
beforeEach(() => {

  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  const s="hello";
  const apikey="d782e0cd";
  const scope = nock(`https://www.omdbapi.com/`).get('/').query({s:s,apikey:apikey})
  .reply(200, {
    Search:val
  }, {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  });
  // scope.done();
  
  
});
afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.restoreAllMocks();
    
    nock.cleanAll();
  });

it("Testing for Search Page Test ", async () => {
    await act(() => {
      render(<SearchPage st={val} />, container);
    });

    const input=document.querySelector('input');
    console.log(input.outerHTML)
    
    // input.value='Breaking Bad';
    userEvent.type(input, "hello")
    console.log(input.outerHTML);
    const button=document.querySelector('button');
    await act( async () => {
       userEvent.click(button);
      });
    await new Promise((r) => setTimeout(r, 2000));
    console.log(container.outerHTML);
    expect(container.querySelector('.linkimdb').textContent).toBe("Link to IMDB");
    //"It means Card is imported correctly 
    expect(container.querySelector('.info').querySelector('h1').textContent).toBe(val[0].Title);  
  });