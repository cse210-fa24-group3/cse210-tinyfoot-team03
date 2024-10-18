import React, { useState, useEffect } from 'react';
import './App.css';
import littlefoot from 'littlefoot';
import 'littlefoot/dist/littlefoot.css'; // Import Littlefoot styles
import InteractiveFootnotes from './footnote';
import { Sun, Moon } from 'react-feather';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    littlefoot();
  }, []);


  useEffect(() => {
 

    document.body.className = theme;
  }, [theme]);

 

  return (

        <div className={`App ${theme}`}>
        <header className="App-header">
          
          <button onClick={toggleTheme} className="theme-toggle-btn" style={{ margin: '1rem', float: 'right', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            {theme === 'light' ? <Sun color="#4b0082" size={24} /> : <Moon color="#FFD700" size={24} />}
          </button>
          
        </header>
        <div className="container">
      
      <h1 className="title">Tiny Foot</h1>
      <p>Tiny Foot is a comparison of two modern libraries designed to make footnotes more user-friendly.</p>

      <div className="section">
        <h2>Bigfoot.js</h2>
        <p>
          <a href="#fn:1" id="fnref:1" data-footnote-ref>Bigfoot.js</a> is a library that enhances the usability and visual appeal of footnotes by turning them into clickable or hoverable popovers. This feature allows users to read footnotes without scrolling to the bottom of the page, providing a smoother reading experience.
        </p>
        <p>
          With various customization options, <a href="#fn:2" id="fnref:2" data-footnote-ref>Bigfoot.js</a> allows developers to adjust the appearance and behavior of footnotes, catering to both desktop and mobile users.
        </p>
      </div>

      <div className="section">
        <h2>Littlefoot.js</h2>
        <InteractiveFootnotes />
      </div>

     
      <div className="footnotes">
        <hr />
        <ol>
          <li className="footnote" id="fn:1">
            <p>Bigfoot.js: A library that turns footnotes into popovers, improving user interaction. <a href="https://bigfootjs.com" target="_blank" rel="noreferrer">Learn more ↩</a></p>
          </li>
          <li className="footnote" id="fn:2">
            <p>Bigfoot.js customization includes hover or click triggers, custom styling, and more. <a href="https://bigfootjs.com" target="_blank" rel="noreferrer">Read about the options ↩</a></p>
          </li>
        </ol>
      </div>
    </div>
      </div>
  );
}

export default App;
