import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Counter2 } from './features/counter/Counter2';
import './App.css';
import { Login } from './features/counter/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Counter2/>
        <Login/>
        
      </header>
    </div>
  );
}

export default App;
