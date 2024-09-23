import { useEffect, useState } from "react";
import { getAllQuizAdmin, deleteQuiz } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
const TableQuiz = (props) => {
  const {
    listQuiz,
    dataDelete,
    setDataDelete,
    setDataUpdate,
    dataUpdate,
    fetchQuiz,
  } = props;
  // const [listQuiz, setListQuiz] = useState([]);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  // const [dataDelete, setDataDelete] = useState({});
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  // const [dataUpdate, setDataUpdate] = useState({});
  // useEffect(() => {
  //   fetchQuiz();
  // }, []);
  // const fetchQuiz = async () => {
  //   setDataDelete({});
  //   setDataUpdate({});
  //   let res = await getAllQuizAdmin();
  //   console.log("res table quiz", res);
  //   if (res && res.EC === 0) {
  //     setListQuiz(res.DT);
  //   }
  // };
  const handleClickBtnDelete = (quiz) => {
    setShowModalDeleteQuiz(true);
    setDataDelete(quiz);
  };
  const handleClickBtnUpdate = (quiz) => {
    setShowModalUpdateQuiz(true);
    setDataUpdate(quiz);
  };
  return (
    <>
      <div>list Quiz</div>
      <table className="table  table-hover table-bordered mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`tableQuiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleClickBtnUpdate(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};
export default TableQuiz;
