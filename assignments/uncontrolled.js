import React, { Component } from "react";

class Uncontrolled extends Component {
  constructor(props) {
    super(props);

    {
      this.email = React.createRef();
      this.password = React.createRef();
    }
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.email.current.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div>
          <h3>Uncontrolled Component</h3>
          <label>Email</label>
          <input type="text" ref={this.email}></input> <br></br>
          <br></br>
          <label>Password</label>
          <input type="password" ref={this.password}></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Uncontrolled;
