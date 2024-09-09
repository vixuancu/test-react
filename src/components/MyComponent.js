// class component
// funtion component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor name="hoi dan it" age={26} myInfor={myInfor} />
      </div>
    ); // dùng cú pháp this truyền dữ liệu khác kiểu string phải dùng {}
  }
}
export default MyComponent;
