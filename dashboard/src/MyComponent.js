import * as React from 'react';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component {
  constructor() {
    super();
  }
  state = {
    value: ""
  }
  handleChange(event) {
    this.setState(
      {
        value: event.target.value
      }
    );
  }
  handleSubmit(event){
    alert(`You chose ${this.state.value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="radio"
            value="1 hour"
            checked={this.state.value == "hour"}
            onChange={this.handleChange}
          />
          1 Hour
      </label>
        <label>
          <input
            type="radio"
            value="1 day"
            checked={this.state.value == "day"}
            onChange={this.handleChange}
          />
          1 Day
        </label>
        <label>
          <input
            type="radio"
            value="1 week"
            checked={this.state.value == "week"}
            onChange={this.handleChange}
          />
          1 Week
        </label>

      </form>
    );
  }
}

export default MyComponent;