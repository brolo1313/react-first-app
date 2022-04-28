import React from 'react';
import logo from './logo.svg';
import './App.css';
import bio from  './bio.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My bio:</h1>
        <p>{bio.firstName}</p>
        <p>{bio.bio}</p>
        <p>{bio.contacts}</p>
      </header>
    </div>
  );
}

export default App;
