import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = useParams();
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
  return <div className="detail-quiz-container">chi tiết quiz</div>;
};
export default DetailQuiz;
