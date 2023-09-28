import { useState } from "react";

const Counter = () => {
  const [value, setCounterValue] = useState(0);

  const increaseCount = () => {
    setCounterValue(value + 1);
  };

  const decreaseCount = () => {
    setCounterValue(value - 1);
  };

  const resetCount = () => {
    setCounterValue(0);
  };

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
