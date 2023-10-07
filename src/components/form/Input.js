import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullName] = useState("");
  const [message, setMassage] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };
  const handleTextareaChange = (event) => {
    console.log(event.target.value);
    setMassage(event.target.value);
  };
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <div className="p-5">
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      {fullname}

      <textarea
        name="message"
        // id=""
        // cols="30"
        // rows="10"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {message}

      <select name="country" onChange={handleSelectChange}>
        <option value="Vietnam">VN</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select>
      {country}
    </div>
  );
};

export default Input;
