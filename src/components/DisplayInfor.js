import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      //prop -> property
      <div>
        {listUsers.map((user) => {
          return (
            // có key ở mỗi user để không có lỗi
            <div key={user.id}>
              <div>My name is: {user.name}</div>
              <div>My age is: {user.age}</div>
              <hr></hr>
            </div>
          );
        })}
        {/* <div>My name is:{name}</div>
        <div>My age is:{age}</div>
        <hr></hr>
        <div>My name is:{name}</div>
        <div>My age is:{age}</div>
        <hr></hr>
        <div>My name is:{name}</div>
        <div>My age is:{age}</div> */}
      </div>
    );
  }
}
export default DisplayInfor;
