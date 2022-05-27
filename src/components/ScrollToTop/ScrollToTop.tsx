import React from "react";
import styles from "./ScrollToTop.module.scss";

import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToSection = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToSection} className={styles.ScrollToTop}>
      <FaArrowAltCircleUp />
    </button>
  );
};

export default ScrollToTop;
