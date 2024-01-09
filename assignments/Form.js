import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };

    {
      this.email = React.createRef();
    }
  }

  usernameEvent = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };

  submitForm(event) {
    event.preventDefault();
    this.email = event.target.value;
  }

  render() {
    return (
      <form onSubmit={() => submitForm()}>
        <div>
          <h2>Controlled Component</h2>
          <label>Username:</label>
          <input
            type="text"
            value="Keer"
            onChange={(event) => this.usernameEvent(event)}
          ></input>
          <h3>Uncontrolled Component</h3>
          <label>Email</label>
          <input type="text" ref={this.email}></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
