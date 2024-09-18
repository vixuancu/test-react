import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  } else {
    const handleCheckBox = (event, aId, qId) => {
      console.log("check data props", aId, qId);
      props.handleCheckBox(aId, qId);
    };
    return (
      <>
        {data.image ? (
          <div className="q-image">
            <img src={`data:image/jpeg;base64,${data.image}`} />
          </div>
        ) : (
          <div className="q-image"></div>
        )}

        <div className="question">
          question :{index + 1} {data.questionDesc} ?
        </div>
        <div className="answer">
          {data.answers &&
            data.answers.length > 0 &&
            data.answers.map((a, index) => {
              return (
                <div key={`answer-${index}`} className="a-child">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      checked={a.isSelected}
                      type="checkbox"
                      onChange={(event) =>
                        handleCheckBox(event, a.id, data.questionId)
                      }
                    />
                    <label className="form-check-label">{a.description}</label>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
};
export default Question;
