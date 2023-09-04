import React from 'react';

function ReviewAndSubmit({ data, onSubmit }) {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <h2>Review Application Details</h2>
   
      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
}

export default ReviewAndSubmit;
