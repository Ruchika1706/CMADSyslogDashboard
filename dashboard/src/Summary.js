import * as React from "react";
import ReactDOM from "react-dom";
class Summary extends React.Component {
//   constructor(props) {
//     //   super(...props);
//     debugger;
//       this.entries = props.summaryProps;
//   }
  render() {
      debugger;
      this.entries = this.props.summaryProps;
    return (
      <div>
        <h3 align="center">Log Level Summary</h3>
        <div>{this.entries.fatal}</div>
        <div>{this.entries.error}</div>
        <div>{this.entries.warn}</div>
        <div>{this.entries.info}</div>
        <div>{this.entries.debug}</div>
        <div>{this.entries.trace}</div>
        <div>{this.entries.notice}</div>
      </div>
    );
  }
}
export default Summary;
