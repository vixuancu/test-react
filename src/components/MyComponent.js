// class component
// funtion component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
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
  ]);

  const handleAddNewUser = (userObiect) => {
    setListUsers([userObiect, ...listUsers]);
  };
  const handleDeleteUser = (userid) => {
    let listUserClone = [...listUsers];
    console.log("check delete 0 ", listUserClone);
    listUserClone = listUserClone.filter((item) => item.id !== userid); //chú ý gán lại không undefind
    setListUsers([...listUserClone]);

    console.log("check delete", listUsers);
  };
  //JSX

  return (
    <>
      <div>
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </>
  ); // dùng cú pháp this truyền dữ liệu khác kiểu string phải dùng {}
};

export default MyComponent;
