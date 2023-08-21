import React, { useEffect, useState } from "react";
import { SvgIcon } from "../icons/svgIcon";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the button should be displayed or not
  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scrolling
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-0 bottom-0 top-3/4 mr-4 z-50">
      {isVisible && (
        <div onClick={scrollToTop}>
          <button
            className={`bg-black opacity-30 hover:opacity-100 hover:border-white hover:border w-10 h-10 text-white rounded ${
              isVisible ? "fade-in-right" : ""
            }`}
          >
            <SvgIcon />
          </button>
        </div>
      )}
    </div>
  );
}
