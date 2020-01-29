import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 align="center">
          Log Dashboard
        </h1>
        <form>
            <input type="radio" name="hour" value="hour"/> 1 hour 
            <input type="radio" name="day" value="day"/> 1 day
            <input type="radio" name="week" value="week"/> 1 week 
        </form>
    </div>
  );
}

export default App;
