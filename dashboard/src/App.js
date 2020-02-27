import React from "react";
import "./App.css";
import LogTable from "./LogTable";
import MyComponent from "./MyComponent";
import Summary from "./Summary";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableProps: 'abc',
      summaryProps:''
   }
  }
  componentDidMount() {
    let fromDate = "2020-01-31 06:51:24";
    let toDate = "2020-01-31 06:51:32";
    this.fetchData(fromDate, toDate);
  //   fetch('http://localhost:8081/syslog/?fromDate=2020-01-31 06:51:24&toDate=2020-01-31 06:51:32').then(response => {
  //     response.json().then(o => {
  //       this.setState({
  //         tableProps: o
  //       });
  //    })
  //  });
  
  }
  render() {

//    const summaryProps = {
//      fatal: 13,
//      error: 13,
//      warn: 13,
//      info: 13,
//      debug: 13,
//      trace: 13,
//      notice:13,
//    };

    return (
      <div className="App">
        <h1 align="center">SysLog Dashboard</h1>
        <Summary summaryProps={this.state.summaryProps} />
        <MyComponent handleChange={this.myFn.bind(this)} />
        {console.log("Ruchika Luthra")}
        {console.log(this.state.tableProps)}
        {/* TODO PASS tableProps to LogTable and inside th LogTable there is data , set data
with this value which is passed here  */}
        <LogTable tableProps={this.state.tableProps}/> 
      </div>
    );
  }

  myFn(evt) {
    console.log("inside");
    let selectedDuration = evt.target.value;
    let fromDate = "2020-01-31 06:51:24";
    let toDate = "2020-01-31 06:51:32";
    switch(selectedDuration) {
      case '1 hour':
          // need to update fromdate and todate
      break;
      case '1 day':
        // need to update fromdate and todate
        break;
      case '1 week':
        // need to update fromdate and todate
      break;
    }
    this.fetchData(fromDate, toDate);
  }

  fetchData(fromDate, toDate) {
	  Promise.all([fetch('http://localhost:8081/syslog/?fromDate=2020-01-31 06:51:24&toDate=2020-01-31 06:51:32'), fetch('http://localhost:8081/stats/?fromDate=2020-01-31 06:51:24&toDate=2020-01-31 06:51:32')])

      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
    	  this.setState({
            tableProps: res1,
            summaryProps:res2
          });
    	  

      });
  
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