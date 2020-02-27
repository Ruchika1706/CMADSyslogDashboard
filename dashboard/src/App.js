import React from "react";
import moment from 'moment';
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
    let toDate = moment(Date.now()).format("YYYY-MM-DD hh:mm:ss");
    let fromDate = moment().subtract(7, 'd').format('YYYY-MM-DD HH:mm:ss')
    // let fromDate = "2020-01-31 06:51:24";
    // let toDate = "2020-01-31 06:51:32";
    this.fetchData(fromDate, toDate);  
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
    let fromDate = "";
    let toDate = moment(Date.now()).format("YYYY-MM-DD hh:mm:ss");
    switch(selectedDuration) {
      case '1 hour':
          fromDate = moment(Date.now()).subtract(1, 'h').format("YYYY-MM-DD hh:mm:ss");
          console.log(fromDate);
      break;
      case '1 day':
        fromDate = moment(Date.now()).subtract(1, 'd').format("YYYY-MM-DD hh:mm:ss");
        console.log(fromDate);
        break;
      case '1 week':
        fromDate = moment().subtract(7, 'd').startOf('day').format('YYYY-MM-DD HH:mm:ss')
        console.log(fromDate);
        break;
    }
    console.log(fromDate);
    console.log(toDate);
    this.fetchData(fromDate, toDate);
  }

  fetchData(fromDate, toDate) {
	  Promise.all([fetch(`http://localhost:8081/syslog/?fromDate=${fromDate}&toDate=${toDate}`), fetch(`http://localhost:8081/stats/?fromDate=${fromDate}&toDate=${toDate}`)])

      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
    	  this.setState({
            tableProps: res1,
            summaryProps:res2
          });
    	  

      }).catch(err => alert(err));
  
  }
}
