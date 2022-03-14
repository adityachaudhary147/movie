import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import PropTypes from 'prop-types'
export default function Card({ obj }) {
  const [cc, setCc] = useState(true);
  function handleClick() {
    console.log(cc);
    setCc((val) => (val ? false : true));
    console.log("insde");
    console.log(cc);
  }
  useEffect(() => {}, []);
  function convertType(input) {
    if (input == "movie") {
      return "Movie";
    } else if (input == "series") {
      return "Series";
    } else {
      return input;
    }
  }
  return (
    <div className="container">
      <div
        className={cc ? ` card` : " card"}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
      >
        <div>
          <img className={cc ? `  poster` : "   poster-hover poster "} src={obj.Poster} />
        </div>
          <div className={cc ? ` upside info` : "  info "}>
            <p id="title">{obj.Title}</p>
            <h3></h3>
            <h5>Type: {convertType(obj.Type)}</h5>
            <div>
              <h5>Year: {obj.Year} </h5>
              <button
                className="btn-imdb"
              >
                <a id="linkimdb" className="linkimdb" href={`https://www.imdb.com/title/${obj.imdbID}`} >Link to IMDB</a>
                </button>
                
            </div>
          </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  obj: PropTypes.object
};
