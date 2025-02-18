import React from "react";

const AttemptHistory = ({ history }) => {
  return (
    <div>
      <h2>Attempt History</h2>
      {history.length === 0 ? (
        <p>No attempts yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((attempt, index) => (
            <li key={index}>
              Attempt {index + 1}: {attempt} / 5
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AttemptHistory;
