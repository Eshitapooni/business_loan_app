import React, { useState } from 'react';
import './App.css';
import StartApplication from './components/StartApplication';
import BusinessLoanForm from './components/BusinessLoanForm';
import AccountingProviderSelection from './components/AccountingProviderSelection';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import LoanApplicationResult from './components/LoanApplicationResult';

function App() {
  const [step, setStep] = useState(0);
  const [applicationData, setApplicationData] = useState({});
  const [selectedProvider, setSelectedProvider] = useState('');
  const [outcome, setOutcome] = useState('');
  
  const handleStart = () => {
    setStep(1);
  };

  const handleFormSubmit = (data) => {
    setApplicationData(data);
    setStep(2);
  };

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setStep(3);
  };

  const handleSubmit = () => {
    setStep(4);
  };

  return (
    <div className="App">
      {step === 0 && <StartApplication onStart={handleStart} />}
      {step === 1 && <BusinessLoanForm onSubmit={handleFormSubmit} />}
      {step === 2 && <AccountingProviderSelection onSelect={handleProviderSelect} />}
      {step === 3 && <ReviewAndSubmit data={applicationData} onSubmit={handleSubmit} />}
      {step === 4 && <LoanApplicationResult outcome={outcome} details={applicationData} />}
    </div>
  );
}

export default App;
