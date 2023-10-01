import React, { useRef } from "react";
import "./App.scss";
import Dropdown from "./components/youtube/Dropdown";

function App() {
  return (
    <div>
      <div className="p-5">
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}

export default App;
