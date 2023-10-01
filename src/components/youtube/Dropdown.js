import React from "react";

const Dropdown = () => {
  return (
    <div className="relative w-full max-w-[400px] ">
      <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer">
        Selector
      </div>
      <div className="border-gray-200 rounded-lg absolute top-full left-0 bg-white">
        <div className="p-5">Angular</div>
        <div className="p-5">ReactJS</div>
        <div className="p-5">Vue</div>
      </div>
    </div>
  );
};

export default Dropdown;
