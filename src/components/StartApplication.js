import React from 'react';

function StartApplication({ onStart }) {
  return (
    <div>
      <h2>Welcome to the Business Loan Application</h2>
      <button onClick={onStart}>Start Application</button>
    </div>
  );
}

export default StartApplication;
