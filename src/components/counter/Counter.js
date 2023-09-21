import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({ firstName: "Linh", lastName: "Nguyen" });

  useEffect(() => {
    console.log(`From Input`);
  }, [info.lastName]);

  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input type="text" />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="inline-block p-3 bg-green-400 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
