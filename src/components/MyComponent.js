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
    console.log("age", this.state.age);

    this.setState({
      name: "vixuancu",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleMouseOver(event) {
    // console.log(">> click me mu button");
    console.log(event);
  }
  //JSX
  render() {
    return (
      <div>
        my first component My name is {this.state.name}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me
        </button>
        <button onMouseOver={this.handleMouseOver}>Hover me</button>
      </div>
    ); // dùng cú pháp this
  }
}
export default MyComponent;
