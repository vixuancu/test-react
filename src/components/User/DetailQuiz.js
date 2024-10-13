import { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalResult from "./ModalResult";
import RightContent from "./RightContent/RightContent";
const DetailQuiz = (props) => {
  const location = useLocation();
  const params = useParams();
  //   console.log(location);
  const quizId = params.id;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [isShowModalResult, setIsShowModalResult] = useState(false);
  const [dataModalResult, setDataModalResult] = useState({});
  useEffect(() => {
    fetchQuesTions();
  }, [quizId]);
  const fetchQuesTions = async () => {
    let res = await getDataQuiz(quizId);
    // console.log("check questions", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDesc,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDesc = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            answers.push(item.answers);
          });
          // console.log("value", value, "key", key);
          answers = _.orderBy(answers, ["id", ["asc"]]);
          return { questionId: key, answers, questionDesc, image };
        })
        .value();
      // console.log("check raw", data);
      setDataQuiz(data);
    }
  };
  //   console.log("check param", params);
  // console.log("check dataquiz", dataQuiz);
  const handlePrev = () => {
    if (dataQuiz && index - 1 < 0) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) {
      setIndex(index + 1);
    }
  };
  const handleCheckBox = (answerId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionId === +questionId
    );
    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answerId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
  };
  const handleFinish = async () => {
    console.log("check data before submit", dataQuiz);
    //   {
    //     "quizId": 1,
    //     "answers": [
    //         {
    //             "questionId": 1,
    //             "userAnswerId": [3]
    //         },
    //         {
    //             "questionId": 2,
    //             "userAnswerId": [6]
    //         }
    //     ]
    // }
    let payload = {
      quizId: +quizId,
      answers: [],
    };
    let answer = [];
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach((item) => {
        let questionId = item.questionId;
        let userAnswerId = [];
        // todo: userAnswerId
        item.answers.forEach((a) => {
          if (a.isSelected) {
            userAnswerId.push(a.id);
          }
        });
        answer.push({
          questionId: +questionId,
          userAnswerId: userAnswerId,
        });
      });
    }
    payload.answers = answer;
    // console.log("final payload", payload);
    //submit API
    let res = await postSubmitQuiz(payload);
    console.log("check res", res);
    if (res && res.EC === 0) {
      setDataModalResult({
        countCorrect: res.DT.countCorrect,
        countTotal: res.DT.countTotal,
        quizData: res.DT.quizData,
      });
      setIsShowModalResult(true);
    } else {
      alert("something wrong ...");
    }
  };
  return (
    <>
      <Breadcrumb className="quiz-detail-new-header">
        <NavLink to={"/"} className={"breadcrumb-item"}>
          Home
        </NavLink>
        <NavLink to={"/users"} className={"breadcrumb-item"}>
          User
        </NavLink>

        <Breadcrumb.Item active>Chi Tiết</Breadcrumb.Item>
      </Breadcrumb>
      <div className="detail-quiz-container">
        <div className="left-content">
          <div className="title">
            Quiz-{quizId} {location?.state?.quizTitle}
          </div>
          <hr />
          <div className="q-body">
            <img />
          </div>
          <div className="q-content">
            <Question
              handleCheckBox={handleCheckBox}
              index={index}
              data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            />
          </div>
          <div className="footer">
            <button className="btn btn-primary " onClick={() => handlePrev()}>
              Prev
            </button>
            <button className="btn btn-secondary" onClick={() => handleNext()}>
              Netx
            </button>
            <button className="btn btn-warning" onClick={() => handleFinish()}>
              Finish
            </button>
          </div>
        </div>
        <div className="right-content">
          <RightContent
            setIndex={setIndex}
            handleFinish={handleFinish}
            dataQuiz={dataQuiz}
          />
        </div>
        <ModalResult
          show={isShowModalResult}
          setShow={setIsShowModalResult}
          dataModalResult={dataModalResult}
        />
      </div>
    </>
  );
};
export default DetailQuiz;
