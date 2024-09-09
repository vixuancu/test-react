// class component
// funtion component

import React from "react";
import AddUserInfor from "./AddUserInfor";
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
  handleAddNewUser = (userObiect) => {
    this.setState({
      listUsers: [userObiect, ...this.state.listUsers],
    });
  };
  handleDeleteUser = (userid) => {
    let listUserClone = [...this.state.listUsers];
    console.log("check delete 0 ", this.listUserClone);
    listUserClone = listUserClone.filter((item) => item.id !== userid); //chú ý gán lại không undefind
    this.setState({
      listUsers: [...listUserClone],
    });
    console.log("check delete", this.state.listUsers);
  };
  //JSX
  render() {
    return (
      <>
        <div>
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
      </>
    ); // dùng cú pháp this truyền dữ liệu khác kiểu string phải dùng {}
  }
}
export default MyComponent;
