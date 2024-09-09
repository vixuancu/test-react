import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("hoi dan it");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    // console.log(event);
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    // console.log(event);
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault(); // không tải lại trang
    // console.log(this.state);
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      my first component My name is {name} and i'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />

        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
