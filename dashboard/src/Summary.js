import * as React from "react";
import ReactDOM from "react-dom";
class Summary extends React.Component {
//   constructor(props) {
//     //   super(...props);
//     debugger;
//       this.entries = props.summaryProps;
//   }
  render() {
      this.entries = this.props.summaryProps;
    return (
      <div>
        <h3 align="center">Log Level Summary</h3>
        <div>Fatal: {this.entries.fatal}</div>
        <div>Error: {this.entries.error}</div>
        <div>Warning: {this.entries.warn}</div>
        <div>Information: {this.entries.info}</div>
        <div>Debug: {this.entries.debug}</div>
        <div>Trace: {this.entries.trace}</div>
        <div>Notice: {this.entries.notice}</div>
      </div>
    );
  }
}
export default Summary;
