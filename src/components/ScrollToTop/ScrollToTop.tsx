import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";

import { HiArrowCircleDown } from "react-icons/hi";

const ScrollToTop = () => {
  const [hideButton, setHideButton] = useState(true);

  const toggleButtonVisibility = () => {
    if (window.scrollY > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleButtonVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.ScrollToTop} ${hideButton ? styles.HideButton : ""}`}
    >
      <HiArrowCircleDown />
    </button>
  );
};

export default ScrollToTop;
