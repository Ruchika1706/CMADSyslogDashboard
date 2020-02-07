import React from 'react';
import './App.css';
import LogTable from './LogTable';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
        <h1 align="center">
          Log Dashboard
        </h1>
        <MyComponent/>
        <LogTable/>
    </div>
  );
}

export default App;
