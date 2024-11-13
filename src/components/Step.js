import React from 'react';

function Step({ step, onStepChange }) {
  return (
    <div>
      <label>
        Krok:
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => onStepChange(Math.max(1, Number(e.target.value)))}
        />
      </label>
    </div>
  );
}

export default Step;
