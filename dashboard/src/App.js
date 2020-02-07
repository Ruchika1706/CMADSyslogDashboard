import React from 'react';
import './App.css';
import LogTable from './LogTable';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
        <h1 align="center">
          SysLog Dashboard
        </h1>
        <h2> Summary </h2>
        <h2> Select the Log Duration </h2>
        <MyComponent/>
        <LogTable/>
    </div>
  );
}

export default App;
