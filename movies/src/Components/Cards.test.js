import Cards from "./Cards";

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const val = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    Title: "Breaking Bad",
    Type: "series",
    Year: "2008–2013",
    imdbID: "tt0903747",
  },
];
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
it("renders with or without a name", () => {
  act(() => {
    render(<Cards st={val} />, container);
  });
  expect(container.querySelector(".linkimdb").textContent).toBe("Link to IMDB");
  //"It means Card is imported correctly
  expect(container.querySelector(".info").querySelector("h1").textContent).toBe(
    val[0].Title
  );
  expect(container.textContent).toBe(
    "Breaking BadType: SeriesYear: 2008–2013 Link to IMDB"
  );

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});
