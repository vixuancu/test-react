import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListuser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    //prop -> property
    <div className="display-infor-container">
      <div>
        <span
          onClick={() => {
            handleShowHideListuser();
          }}
        >
          {isShowHideListUser === true ? "hide list users" : "show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is: {user.name}</div>
                <div>My age is: {user.age}</div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
