import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  // const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (event) => {
    // console.log(event.target.value);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight("auto");
    setText(event.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 decoration-fuchsia-400 resize-none leading-normal"
        placeholder="Pleaese enter your content..."
        value={text}
        ref={textareaRef}
        style={{ height: textareaHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
