import React, { useState } from 'react';

function BusinessLoanForm({ onSubmit }) {
  const [businessDetails, setBusinessDetails] = useState({});
  const [loanAmount, setLoanAmount] = useState('');

  const handleBusinessDetailsChange = (event) => {
    const { name, value } = event.target;
    setBusinessDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      businessDetails,
      loanAmount,
    };
    onSubmit(data);
  };

  return (
    <div>
      <h2>Enter Business Details and Loan Amount</h2>
      <input
        type="text"
        name="name"
        placeholder="Business Name"
        onChange={handleBusinessDetailsChange}
      />
      
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default BusinessLoanForm;
