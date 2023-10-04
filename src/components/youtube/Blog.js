// import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../../hook/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();

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
        <a href="https://google.com" className="underline text-red-400">
          Google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
        <a href="https://google.com" className="underline">
          Google.com
        </a>{" "}
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  );
};

export default Blog;
