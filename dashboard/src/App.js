import React from "react";
import "./App.css";
import LogTable from "./LogTable";
import MyComponent from "./MyComponent";
import Summary from "./Summary";

export default class App extends React.Component {
  // constructor(props) {
  //   debugger;
  //   super(...props);

  //   // this.
  // }

  render() {

    const summaryProps = {
      fatal: 13,
      error: 13,
      warn: 13,
      info: 13,
      debug: 13,
      trace: 13,
      notice:13,
    };

    return (
      <div className="App">
        <h1 align="center">SysLog Dashboard</h1>
        <Summary summaryProps={summaryProps} />
        <MyComponent handleChange={this.myFn} />
        <LogTable />
      </div>
    );
  }

  myFn() {
    console.log("inside");
    
  }
}
// function App() {
  
//   return (
//     <div className="App">
//       <h1 align="center">SysLog Dashboard</h1>
//       <Summary summaryPros={summaryPros} />
//       <MyComponent />
//       <LogTable />
//     </div>
//   );
// }

// export default App;