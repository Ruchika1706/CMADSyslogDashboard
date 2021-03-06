import * as React from 'react';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component {
  constructor() {
    super();
  }
  state = {
    value: "",
    checked: "1 week"
  }
  handleChange(event) {
    // this.setState(
    //   {
    //     value: "event.target.value"
    //   }
    // );
    this.setState({checked: event.target.value});
    this.props.handleChange(event);
  }
  handleSubmit(event){
    alert(`You chose ${this.state.value}`);
  }
  render() {
    return (
      <React.Fragment>
        <h2> Select the Log Duration </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="select-duration"
              value="1 hour"
              // checked={this.state.value == "hour"}
              checked={this.state.checked === "1 hour"}
              onChange={this.handleChange.bind(this)}
            />
            1 Hour
        </label>
          <label>
            <input
              type="radio"
              name="select-duration"
              value="1 day"
              // checked={this.state.value == "day"}
              checked={this.state.checked === "1 day"}
              onChange={this.handleChange.bind(this)}
            />
            1 Day
          </label>
          <label>
            <input
              type="radio"

              name="select-duration"
              value="1 week"
              // checked={this.state.value == "week"}
              checked={this.state.checked === "1 week"}
              onChange={this.handleChange.bind(this)}
            />
            1 Week
          </label>

        </form>
      </React.Fragment>
    );
  }
}

export default MyComponent;