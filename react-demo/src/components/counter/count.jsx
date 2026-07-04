import React from "react";
import { useState } from "react";
import emoji from "../../assets/emoji.webp";
import react from "../../assets/react.svg";
import hero from "../../assets/hero.png";
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
      <h1 class="text-4xl font-bold bg-orange-500 text-white">
        Counter Component
      </h1>
      <h2 class=" text-4xl font-bold">{Counter}</h2>
      <button onClick={add}>
        <img src={emoji} alt="Increment" />
      </button>
      <button onClick={sub}>
        {" "}
        <img src={hero} alt="decrement" />
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Count;
