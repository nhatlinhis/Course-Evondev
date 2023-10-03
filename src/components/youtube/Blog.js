import React, { useEffect, useRef } from "react";

const Blog = () => {
  const contentref = useRef(null);
  useEffect(() => {
    if (contentref) {
      const links = contentref.current.querySelectorAll("a");
      console.log("useEffect ~", links);
    }
  });

  return (
    <div className="entry-content">
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        essentially unchanged. Volipate, saepe{" "}
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  );
};

export default Blog;
