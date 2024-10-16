import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        
      </header>
      {/* enter the text here */}
      <p>heheifjdsfwbe </p>
    </div>
  );
}

export default App;
