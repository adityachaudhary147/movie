import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReactFromModule } from 'lib-movies';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log("Checking react versions");
console.log(React === ReactFromModule); // true :)
