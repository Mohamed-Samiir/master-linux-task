import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import RegesterComponent from "./components/regesterComponent";
import QuizComponent from "./quizComponent";
import QuestionsContext from "./contexts/questionsContext";
import UserContext from "./contexts/userContext";

const questions = [
  {
    text: "question (1) ?",
    answers: ["ans1", "ans2", "ans3", "ans4"],
    correctAnswer: "ans2",
    solved: false,
  },
  {
    text: "question (2) ?",
    answers: ["ans1", "ans2", "ans3", "ans4"],
    correctAnswer: "ans2",
    solved: false,
  },
  {
    text: "question (3) ?",
    answers: ["ans1", "ans2", "ans3", "ans4"],
    correctAnswer: "ans4",
    solved: false,
  },
  {
    text: "question (4) ?",
    answers: ["ans1", "ans2", "ans3", "ans4"],
    correctAnswer: "ans2",
    solved: false,
  },
  {
    text: "question (5) ?",
    answers: ["ans1", "ans2", "ans3", "ans4"],
    correctAnswer: "ans1",
    solved: false,
  },
];

function App() {
  console.log(questions);
  const [user, setUser] = useState({});
  const regesterUser = (name) => {
    console.log(name);
    setUser({ name, score: 0 });
  };
  const updateScore = () => {
    const score = user.score++;
    setUser({ score });
    console.log(user.score);
  };
  return (
    <UserContext.Provider
      value={{ user, onRegester: regesterUser, onUpdateScore: updateScore }}
    >
      <QuestionsContext.Provider value={questions}>
        <BrowserRouter>
          <Switch>
            <Route path="/quiz" component={QuizComponent} />
            <Route path="/" exact component={RegesterComponent} />
          </Switch>
        </BrowserRouter>
      </QuestionsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
