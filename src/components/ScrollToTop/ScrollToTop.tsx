import React, { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./ScrollToTop.module.scss";

import { HiArrowCircleDown } from "react-icons/hi";

const ScrollToTop = () => {
  const [hideButton, setHideButton] = useState(true);

  const toggleButtonVisibility = () => {
    console.log("scrolled");
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
    window.addEventListener("scroll", _.throttle(toggleButtonVisibility, 200));
    return () =>
      window.removeEventListener(
        "scroll",
        _.throttle(toggleButtonVisibility, 200)
      );
    //return () => window.removeEventListener("scroll", toggleButtonVisibility);
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
