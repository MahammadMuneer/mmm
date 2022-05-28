import React from "react";
import styles from "./Info.module.scss";
import ScrollToTop from "../ScrollToTop";
import SectionTitle from "../SectionTitle";

const Info = ({ scrollRef }: any) => {
  return (
    <div className={styles.Info} ref={scrollRef}>
      <SectionTitle title="Info" />
      <ScrollToTop />
    </div>
  );
};

export default Info;
