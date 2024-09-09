// class component
// funtion component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "hoi dan it",
        age: "16",
      },
      {
        id: 2,
        name: "thang",
        age: "26",
      },
      {
        id: 3,
        name: "cu",
        age: "69",
      },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    ); // dùng cú pháp this truyền dữ liệu khác kiểu string phải dùng {}
  }
}
export default MyComponent;
