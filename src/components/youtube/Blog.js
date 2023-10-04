import useHover from "../../hook/useHover";
import useLinkNewTab from "../../hook/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();

  return (
    <div className="entry-content" ref={contentRef}>
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
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
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
