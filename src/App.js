import React from 'react';
import logo from './Nike-Logo-1978-present.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
            Welcome to React
        </h2>
          <img alt="basketball" src="https://pimage.sport-thieme.de/detail-fillscale/wilson-basketball-evolution/268-9119"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
