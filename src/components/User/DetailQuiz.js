import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
  const location = useLocation();
  const params = useParams();
  //   console.log(location);
  const quizId = params.id;
  useEffect(() => {
    fetchQuesTions();
  }, [quizId]);
  const fetchQuesTions = async () => {
    let res = await getDataQuiz(quizId);
    console.log("check questions", res);
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
            answers.push(item.answers);
          });
          console.log("value", value, "key", key);

          return { questionId: key, answers, questionDesc, image };
        })
        .value();
      console.log("check raw", data);
    }
  };
  //   console.log("check param", params);
  return (
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
          <div className="question">question :1 how are you</div>
          <div className="answer">
            <div className="a-child">A</div>
            <div className="b-child">B</div>
            <div className="c-child">C</div>
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-primary ">Prev</button>
          <button className="btn btn-secondary ml-3">Netx</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};
export default DetailQuiz;
