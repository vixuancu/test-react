// class component
// funtion component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "reic",
    address: "hoidanit",
    age: 26,
  };
  //JSX
  render() {
    return <div>my first component My name is {this.state.name}</div>;
  }
}
export default MyComponent;
