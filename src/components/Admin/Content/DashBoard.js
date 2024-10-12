import "./DashBoard.scss";
import { getOverview } from "../../../services/apiService";
import {
  ResponsiveContainer,
  BarChart,
  // CartesianGrid,
  XAxis,
  // YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";

const DashBoard = (props) => {
  const [dataOverview, setDataOverview] = useState([]);
  const [dataChart, setDatachart] = useState([]);
  useEffect(() => {
    fetchDataOverview();
  }, []);
  const fetchDataOverview = async () => {
    let res = await getOverview();
    // console.log("check dt overview", res);
    if (res && res.EC === 0) {
      setDataOverview(res.DT);
      // process chart data
      let Qz = 0,
        Qs = 0,
        As = 0;
      Qz = res.DT.others.countQuiz ?? 0;
      Qs = res.DT.others.countQuestions ?? 0;
      As = res.DT.others.countAnswers ?? 0;

      const data = [
        {
          name: "Quizzes",
          Qz: Qz,
        },
        {
          name: "Questions",
          Qs: Qs,
        },
        {
          name: "Answer",
          As: As,
        },
      ];
      setDatachart(data);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="title">Analytics DashBoard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">
            <span className="text-1">Total users</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.users &&
              dataOverview.users.total ? (
                <>{dataOverview.users.total}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Quiz</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countQuiz ? (
                <>{dataOverview.others.countQuiz}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Question</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countQuestions ? (
                <>{dataOverview.others.countQuestions}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Answer</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countAnswers ? (
                <>{dataOverview.others.countAnswers}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width={"95%"} height={"100%"}>
            <BarChart data={dataChart}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="Qz" fill="#8884d8" />
              <Bar dataKey="Qs" fill="#82ca9d" />
              <Bar dataKey="As" fill="#f00000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
