import React from "react";
import "./DisplayInfor.scss";
// class DisplayInfor extends React.Component {
//   state = {
//     isShowListUser: true,
//   };

//   render() {
//     // console.log(this.props);
//     const { listUsers } = this.props;
//     console.log(listUsers);
//     return (
//       //prop -> property
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is: {user.name}</div>
//                   <div>My age is: {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr></hr>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  return (
    //prop -> property
    <div className="display-infor-container">
      {true && (
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
