import React, { useRef } from "react";
import "./App.scss";

function App() {
  const timerRef = useRef(null);
  const [count, setCount] = React.useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div className="gap-5">
        <button onClick={handleStart}>
          {count == 0 ? "Start" : "Continue"}
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
