import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    fetchQuesTions();
  }, [quizId]);
  const fetchQuesTions = async () => {
    let res = await getDataQuiz(quizId);
    console.log("check questions", res);
  };
  //   console.log("check param", params);
  return <div className="detail-quiz-container">chi tiết quiz</div>;
};
export default DetailQuiz;
