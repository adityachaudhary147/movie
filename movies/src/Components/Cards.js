import { Card } from "lib-movies";
import React from "react";

export default function Cards({ st }) {
  return (
    <div className="flex-cards flexible">
      {st.map((val) => {
        return <Card obj={val} key={val.imdbID}></Card>;
      })}
    </div>
  );
}
