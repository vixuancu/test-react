import React from "react";
class UserInfor extends React.Component {
  state = {
    name: "reic",
    address: "hoidanit",
    age: 26,
  };

  handleOnChangeInput = (event) => {
    // console.log(event);
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    // console.log(event);
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); // không tải lại trang
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {" "}
        my first component My name is {this.state.name} and i'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
