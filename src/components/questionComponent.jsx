import React, { useState } from "react";

const QuestionComponent = ({ question, index, onQuestionSubmit }) => {
  const [answer, setAnswer] = useState("");
  console.log(question.correctAnswer);
  return (
    <div>
      <h1>Question Number ({index})</h1>
      <h3>{question.text}</h3>
      <div onChange={(e) => setAnswer(e.target.value)}>
        {question.answers.map((answer, j) => (
          <label key={j}>
            <input type="radio" name="answer" value={answer} />
            {answer}
          </label>
        ))}
      </div>
      <button
        onClick={() => onQuestionSubmit(answer === question.correctAnswer)}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionComponent;
