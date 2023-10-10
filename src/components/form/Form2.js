import React, { useState } from "react";

const Form = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMassage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };
  // const handleTextareaChange = (event) => {
  //   console.log(event.target.value);
  //   setMassage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   console.log(event.target.value);
  //   setCountry(event.target.value);
  // };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    chobby: false,
  });
  // console.log("values ~", values);
  const handleInputChange = (e) => {
    const type = e.target.type;
    // c1
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });

    // c2
    // if (type === "checkbox") {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //     // [e.target.email]: e.target.value,
    //   });
    // }
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email adress"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
      {/* {fullname}  */}

      {/* <textarea
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
      {country} */}
    </div>
  );
};

export default Form;
