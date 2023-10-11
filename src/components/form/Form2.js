import React, { useState } from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form2 = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    chobby: false,
  });
  console.log("Form ~ values", values);

  return (
    <div className="p-5">
      <form className="flex gap-x-3" autoComplete="off">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email adress"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button
          type="submit"
          className="p-5 bg-blue-600 text-white rounded-lg hover:bg-[#eee] hover:text-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
