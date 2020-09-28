import React, { useContext, useState } from "react";
import UserContext from "./contexts/userContext";
import QuestionsContext from "./contexts/questionsContext";
import QuestionComponent from "./components/questionComponent";

const QuizComponent = () => {
  const handleQuestionSubmit = (bool) => {
    console.log(bool);
    if (!bool) return;

    userContext.onUpdateScore();
  };
  const questionsContext = useContext(QuestionsContext);
  console.log(questionsContext);
  const userContext = useContext(UserContext);
  console.log(userContext.user);
  return (
    <div>
      {questionsContext.map((question, i) => (
        <QuestionComponent
          question={question}
          index={i + 1}
          key={i}
          onQuestionSubmit={handleQuestionSubmit}
        />
      ))}
      <button>Submit Quiz</button>
    </div>
  );
};

export default QuizComponent;
