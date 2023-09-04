import React from 'react';

function LoanApplicationResult({ outcome, details }) {
  return (
    <div>
      <h2>Loan Application Result</h2>
      <p>Outcome: {outcome}</p>
     
    </div>
  );
}

export default LoanApplicationResult;
