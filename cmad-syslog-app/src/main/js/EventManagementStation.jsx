import React from 'react';

class EventManagementStation extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         user: '',
         devices: [],
         events: []
      }

      this.onUserName = e => {
         this.setState({
            user: e.target.value
         })
      }
      this.onLogin = () => {
         //fetch(`http://localhost:8081/${this.state.user}/devices`).then(response => {
            fetch("http://localhost:8080/syslog/?fromDate=2020-01-31 06:51:24&toDate=2020-01-31 06:51:32").then(response => {
            response.json().then(devices => { this.setState({ devices: devices }) })
         })
      }

      this.onDevice = e => {
         fetch(`http://localhost:8082/${e.target.getAttribute("did")}/events`).then(response => {
            response.json().then(events => { this.setState({ events: events }) })
         })
      }
   }
   render() {
      return (
         <div>
            <h1>Event Management Station</h1>
            <hr />
            User Name <input onChange={this.onUserName} /><button onClick={this.onLogin}>Login</button>
            <hr />
            <b>Devices</b>
            <table>
               <tbody>
               <tr><td>
                  {
                     this.state.devices.map(device => <li key={device}><span style={{ cursor: "pointer" }} did={device} onClick={this.onDevice}>{device}</span></li>)
                  }
               </td></tr>
               </tbody>
            </table>
            <hr />
            <b>Events</b>
            <table>
               <tbody>
               <tr><th>IP Address</th><th>Date</th><th>Level</th><th>Description</th></tr>
               {
                  this.state.events.map(e => <tr key={e.eid}><td>{e.ip}</td><td>{e.date}</td><td>{e.level}</td><td>{e.description}</td></tr>)
               }
               </tbody>
            </table>
         </div>
      )
   }
}

export default EventManagementStation;