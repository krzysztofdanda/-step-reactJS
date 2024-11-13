import React, { useState } from 'react';
import Step from './Step';
import "./Counter.css"


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); 

  const handleIncrease = () => {
    setCount(count + step); 
  };

  return (
    <div className="counter">
      <h1>Licznik: {count}</h1>
      <button onClick={handleIncrease}>Zwiększ o {step}</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Step step={step} onStepChange={setStep} />
    </div>
  );
}

export default Counter;
