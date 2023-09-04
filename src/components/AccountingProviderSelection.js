import React, { useState } from 'react';

function AccountingProviderSelection({ onSelect }) {
  const [selectedProvider, setSelectedProvider] = useState('');

  const handleProviderChange = (event) => {
    setSelectedProvider(event.target.value);
  };

  const handleNext = () => {
    onSelect(selectedProvider);
  };

  return (
    <div>
      <h2>Select Accounting Provider</h2>
      <select value={selectedProvider} onChange={handleProviderChange}>
        <option value="">Select Provider</option>
        <option value="xero">Xero</option>
        <option value="myob">MYOB</option>
        {/* Other provider options */}
      </select>
      <button onClick={handleNext} disabled={!selectedProvider}>
        Next
      </button>
    </div>
  );
}

export default AccountingProviderSelection;
