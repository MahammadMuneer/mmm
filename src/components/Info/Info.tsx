import React from "react";
import styles from "./Info.module.scss";
import ScrollToTop from "../ScrollToTop";

const Info = ({ scrollRef }: any) => {
  return (
    <div className={styles.Info} ref={scrollRef}>
      <h1>Info</h1>
      <ScrollToTop />
    </div>
  );
};

export default Info;
