// class component
// funtion component

import React from "react";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
      </div>
    ); // dùng cú pháp this
  }
}
export default MyComponent;
