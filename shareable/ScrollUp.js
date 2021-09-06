import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      window.addEventListener("scroll", checkScrollTop, { passive: true });
    }
  }, [typeof window !== "undefined"]);

  const checkScrollTop = () => {
    if (typeof window !== "undefined") {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    }
  };

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <FontAwesomeIcon
      icon={faArrowCircleUp}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
      className={"scrollTop"}
      size="10x"
    />
  );
};

export default ScrollArrow;
