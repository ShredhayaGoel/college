import React from "react";
import { useState } from "react";
const Count = () => {
  const [Counter, setCounter] = useState(0);
  const add = () => {
    setCounter(Counter + 1);
  };
  const sub = () => {
    if (Counter > 0) setCounter(Counter - 1);
  };
  const reset = () => setCounter(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <h2>{Counter}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Count;
