import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

var App = () => {
  console.log("App Rendered");
  const loupe = new LoupeAgent(window, document);
  loupe.setCORSOrigin('https://localhost:44325/');
  const someObject = { name: "test", code: 123, nestedObj: { a: 1} };
  loupe.verbose('React', 'verbose caption', 'verbose description',null, null, someObject, null);
  loupe.information('React', 'info caption', 'info description');
  loupe.warning('React', 'warning caption', 'warning description');
  loupe.error('React', 'error caption', 'error description');
  loupe.critical('React', 'critical caption', 'critical description');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
