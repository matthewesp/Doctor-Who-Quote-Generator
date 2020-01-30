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
      <div className="footer">
        <sub>
          This is was a project by <a href="https://www.techstratt.com/">Matthew Esparza</a> Check out my github <a href="https://github.com/matthewesp">right here</a>
        </sub>
      </div>
    </div>
  );
}

export default App;
