import React, { useState } from "react";
import Timer from "./Timer";
import quizData from "../quizData";

const Quiz = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestionIndex].answer) {
      setFeedback("✅ Correct!");
      setScore(score + 1);
    } else {
      setFeedback("❌ Incorrect!");
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setFeedback("");
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{quizData[currentQuestionIndex].question}</p>

      <Timer timeLimit={30} onTimeUp={goToNextQuestion} />

      {quizData[currentQuestionIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className={selectedOption === option ? 
                      (option === quizData[currentQuestionIndex].answer ? "correct" : "incorrect") 
                      : ""}
          disabled={selectedOption}
        >
          {option}
        </button>
      ))}
      {feedback && <p>{feedback}</p>}
      {selectedOption && <button className="next-btn" onClick={goToNextQuestion}>Next</button>}
    </div>
  );
};

export default Quiz;
