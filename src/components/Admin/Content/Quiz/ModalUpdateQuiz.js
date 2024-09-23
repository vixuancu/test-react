import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlusCircle } from "react-icons/fa";
import Select from "react-select";
import { toast } from "react-toastify";
import { putUpdateQuiz } from "../../../../services/apiService";
import _ from "lodash";
import "./ManageQuiz.scss";

const ModalUpdateQuiz = (props) => {
  const { show, setShow, dataUpdate, fetchQuiz, setDataUpdate } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setQuizName("");
    setDescription("");
    setDifficulty("");
    setImage("");
    setPreviewImage("");
    // console.log("props.resetUpdateData ", props);
    setDataUpdate({});
  };
  // const handleShow = () => setShow(true);
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState();
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      // update state
      setQuizName(dataUpdate.name);
      setDescription(dataUpdate.description);
      setDifficulty(dataUpdate.difficulty);
      setImage("");
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      //   setPreviewImage("");
    }
  };

  const handleSubmitUpdateQuiz = async () => {
    let data = await putUpdateQuiz(
      dataUpdate.id,
      quizName,
      description,
      difficulty,
      image
    );
    // console.log("check data", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      fetchQuiz();
      console.log("props.currentPage", props);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  console.log("check data update", dataUpdate);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        className="modal-add-user"
        backdrop="static"
        show={show}
        onHide={handleClose}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                onChange={(event) => setQuizName(event.target.value)}
                type="text"
                className="form-control"
                value={quizName}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                className="form-control"
                value={description}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Difficulty</label>

              <select
                className="form-select"
                onChange={(event) => setDifficulty(event.target.value)}
                value={difficulty}
              >
                <option value={"EASY"}>EASY</option>
                <option value={"MEDIUM"}>MEDIUM</option>
                <option value={"HARD"}>HARD</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload " htmlFor="labelUpload">
                <FaPlusCircle /> Upload File Image Quiz
              </label>
              <input
                onChange={(event) => handleUploadImage(event)}
                type="file"
                hidden
                id="labelUpload"
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateQuiz()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateQuiz;
