import React, { useState } from "react";
import "./App.scss";
import HackerNews from "./components/news/HackerNews";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle button</button>
      {/* {show && <HackerNews></HackerNews>} */}
      {show ? <HackerNews></HackerNews> : null}
    </div>
  );
}

export default App;
