import React, { useState } from "react";

const CounterTwo = () => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => incrementFive()}>IncrementFive</button>
    </div>
  );
};
export default CounterTwo;
