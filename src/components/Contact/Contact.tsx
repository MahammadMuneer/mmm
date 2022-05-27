import React from "react";
import styles from "./Contact.module.scss";
import ScrollToTop from "../ScrollToTop";

const Contact = ({ scrollRef }: any) => {
  return (
    <div className={styles.Contact} ref={scrollRef}>
      <h1>Contact</h1>
      <ScrollToTop />
    </div>
  );
};

export default Contact;
