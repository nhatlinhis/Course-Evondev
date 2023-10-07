import React from "react";
import useClickOutSide from "../../hook/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selector
      </div>
      {show && (
        <div className="border-gray-200 rounded-lg absolute top-full left-0 bg-white">
          <div className="p-5 cursor-pointer ">Angular</div>
          <div className="p-5 cursor-pointer ">ReactJS</div>
          <div className="p-5 cursor-pointer ">Vue</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
