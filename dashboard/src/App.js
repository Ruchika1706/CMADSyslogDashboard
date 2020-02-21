import React from "react";
import "./App.css";
import LogTable from "./LogTable";
import MyComponent from "./MyComponent";
import Summary from "./Summary";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableProps: 'abc'
   }
  }
  componentDidMount() {
    fetch('http://localhost:8081/syslog/?fromDate=2020-01-31 06:51:24&toDate=2020-01-31 06:51:32').then(response => {
      response.json().then(o => {
        this.setState({
          tableProps: o
        });
     })
   });
  
  }
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
        {console.log("Ruchika Luthra")}
        {console.log(this.state.tableProps)}
        {/* TODO PASS tableProps to LogTable and inside th LogTable there is data , set data
with this value which is passed here  */}
        <LogTable tableProps={this.state.tableProps}/> 
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

//export default App;