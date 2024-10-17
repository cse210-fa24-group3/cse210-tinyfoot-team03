import React, { useState, useEffect } from 'react';
import './App.css';
import littlefoot from 'littlefoot';
import 'littlefoot/dist/littlefoot.css'; // Import Littlefoot styles
import bigfoot from 'bigfoot';
import 'bigfoot/dist/bigfoot.css'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
    littlefoot();
  }, [theme]);

 

  return (
    

        <div className={`App ${theme}`}>
        <header className="App-header">
          
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
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
        <p>
          <a href="#fn:3" id="fnref:3" data-footnote-ref>Littlefoot.js</a> is a lightweight alternative, focusing on performance and simplicity. It provides responsive popovers that only load on demand, ensuring faster page loads and smooth operation on mobile devices.
        </p>
        <p>
          While lighter in size, <a href="#fn:4" id="fnref:4" data-footnote-ref>Littlefoot.js</a> retains much of the functionality needed to create a modern, engaging footnote experience, especially on small screens.
        </p>
      </div>

      {/* Footnotes (will be hidden by CSS when popovers are active) */}
      <div className="footnotes">
        <hr />
        <ol>
          <li className="footnote" id="fn:1">
            <p>Bigfoot.js: A library that turns footnotes into popovers, improving user interaction. <a href="https://bigfootjs.com" target="_blank" rel="noreferrer">Learn more ↩</a></p>
          </li>
          <li className="footnote" id="fn:2">
            <p>Bigfoot.js customization includes hover or click triggers, custom styling, and more. <a href="https://bigfootjs.com" target="_blank" rel="noreferrer">Read about the options ↩</a></p>
          </li>
          <li className="footnote" id="fn:3">
            <p>Littlefoot.js: A lightweight footnote library optimized for mobile devices. <a href="https://littlefoot.js.org/" target="_blank" rel="noreferrer">Learn more ↩</a></p>
          </li>
          <li className="footnote" id="fn:4">
            <p>Littlefoot.js focuses on performance, making it ideal for sites where speed and mobile usability are key. <a href="https://littlefoot.js.org/" target="_blank" rel="noreferrer">Read about Littlefoot ↩</a></p>
          </li>
        </ol>
      </div>
    </div>
        <p>test </p>
      </div>
  );
}

export default App;
