import "./App.scss";
import React, { useState } from "react";
import Dropdown from "./components/youtube/Dropdown";
import SideBarMenu from "./components/SideBarMenu";
import useClickOutSide from "./hook/useClickOutSide";

function App() {
  const { show, setShow, nodeRef } = useClickOutSide("button");
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show menu
      </button>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
