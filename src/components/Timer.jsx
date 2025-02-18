import React, { useState, useEffect } from "react";

const Timer = ({ timeLimit, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Move to the next question
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return <p className="timer">⏳ Time Left: {timeLeft}s</p>;
};

export default Timer;
