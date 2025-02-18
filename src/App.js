import React, { useState } from "react";
import Quiz from "./components/Quiz";
import AttemptHistory from "./components/AttemptHistory";
import './App.css'

const App = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [history, setHistory] = useState([]);

  const handleQuizComplete = (score) => {
    setFinalScore(score);
    setHistory([...history, score]);
    setQuizCompleted(true);
  };

  return (
    <div className="container">
      <h1>Interactive Quiz Platform</h1>
      {quizCompleted ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p className="score">Your score: {finalScore} / 5</p>
          <button className="next-btn" onClick={() => setQuizCompleted(false)}>Retry</button>
        </div>
      ) : (
        <Quiz onComplete={handleQuizComplete} />
      )}
      <AttemptHistory history={history} />
    </div>
  );
};

export default App;
