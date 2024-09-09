// class component
// funtion component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "reic",
    address: "hoidanit",
    age: 26,
  };
  handleClick = (event) => {
    // console.log(">> click me mu button");
    // console.log(event.target);
    // console.log("age", this.state.age);
    this.setState({
      name: event.target.value,
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleMouseOver(event) {
    // console.log(">> click me mu button");
    console.log(event);
  }
  handleOnChangeInput = (event) => {
    // console.log(event);
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); // không tải lại trang
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        my first component My name is {this.state.name} and i'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    ); // dùng cú pháp this
  }
}
export default MyComponent;
