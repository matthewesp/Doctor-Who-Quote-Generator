import React from 'react';
import './App.css';
import Quotes from './components/Quotes.js';
import Logo from "./assets/images/tardis.svg"

function App() {
  return (
    <div className="no-of">
      <div className="title">
        <img src={Logo} alt="tardis" className="logo rotate-vert-center" />
        <h1 className="center-text">Doctor Who Quote Generator</h1>
      </div>
      <Quotes />
      <div className="footer"><sub>This is demonstrating <a href="https://www.techstratt.com/">Techstratt's</a> new Doctor Who RESTful API. For more information <a href="#">click here</a></sub></div>
    </div>
  );
}

export default App;
