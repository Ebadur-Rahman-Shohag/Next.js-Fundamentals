//In this component we are goinig to talk about client component
"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecment = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
    else setCount(0);
  };

  const handleInement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-3xl mx-auto flex gap-8">
        <button
          onClick={handleDecment}
          className="bg-blue-500 rounded-md text-white px-8 py-2 mt-4"
        >
          Decrement
        </button>
        <p className="py-4 text-5xl text-cyan-400 text-center">Counter Number: {count}</p>
        <button
          onClick={handleInement}
          className="bg-blue-500 rounded-md text-white px-4 py-2 mt-4"
        >
          Increment
        </button>
      </div>
    </section>
  );
}

export default Counter;
