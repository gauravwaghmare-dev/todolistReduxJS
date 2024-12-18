import { useState } from "react";

const StudyComponent = () => {
  const style = {
    container: {
      padding: "20px",
      border: "1px solid #E0E0E0",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    question: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
    options: {
      marginBottom: "5px",
    },
    button: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "#007BFF",
      color: "#FFF",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    feedback: {
      marginTop: "10px",
      fontSize: "14px",
    },
  };
  // do not modify the questions or answers below
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];
  const [queIndex, setQueIndex] = useState(0);
  const [opSelected, setOpSelected] = useState(null);
  const onSubmitHandler = (e) => {
    console.log(opSelected);
    // setQueIndex(e.target.value);
  };
  const radioOnChangehandler = (e) => {
    setOpSelected(e.target.value);
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {questions.map((que, index) => {
          if (queIndex == index) {
            return (
              <div key={index}>
                {que.question}
                <div style={style.options}>
                  {que.options.map((op, index) => {
                    return (
                      <label>
                        <input
                          type="radio"
                          value={op}
                          key={index}
                          checked={opSelected === op}
                          onChange={radioOnChangehandler}
                        ></input>
                        {op}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>

      <button style={style.button} id="submitBtn" onClick={onSubmitHandler}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}></div>
    </div>
  );
};

export default StudyComponent;
