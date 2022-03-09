import { Header } from "../../../dist";


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
    act(() => {
      render(<Header />, container);
    });
    expect(container.querySelector('.flex-list').textContent).toBe("Movie Data Base Search");
    
  });