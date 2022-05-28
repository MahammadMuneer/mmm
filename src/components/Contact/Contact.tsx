import React from "react";
import styles from "./Contact.module.scss";
import ScrollToTop from "../ScrollToTop";
import SectionTitle from "../SectionTitle";

const Contact = ({ scrollRef }: any) => {
  return (
    <div className={styles.Contact} ref={scrollRef}>
      <SectionTitle title="Contact" />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
