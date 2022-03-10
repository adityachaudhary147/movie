import { SearchButton } from "../../../dist";


import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act,fireEvent } from "react-dom/test-utils";
// import userEvent from '@testing-library/user-event'

let container=null;
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
  const st="hello";
    act(() => {
      render(<SearchButton label={st} />, container);
    });
    expect(container.querySelector('.btn-search').textContent).toBe(st);
    
  });