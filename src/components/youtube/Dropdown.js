import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // console.log("Click outside dropdown");
        setShowDropdown(false);
      }
      // } else {
      //   console.log("Click inside");
      // }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[400px] " ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selector
      </div>
      {showDropdown && (
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
