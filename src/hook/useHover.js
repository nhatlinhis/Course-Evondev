import { useEffect, useRef, useState } from "react";

export default function useHover() {
  //mouseover
  //mouseout
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  const dom = nodeRef.current;
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function hnadleMouseut() {
      setHovered(false);
    }
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", hnadleMouseut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", hnadleMouseut);
    };
  }, []);

  return {
    hovered,
    nodeRef,
  };
}
