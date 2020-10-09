import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFunctional from './buttonFunctional'
import FormClassComp from './formClassComp'


// for styling react local scope:
// css modules
// https://styled-components.com/

function App() {
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
        {/* <FormClassComp title="Hello World 1" /> */}
        {/* <hr />
        <FormClassComp title="Hello World 2" />
        <hr />
        <FormClassComp title="Hello World 3" /> */}
        <ButtonFunctional text="Hello Webinar" />
      </header>
    </div>
  );
}

export default App;
