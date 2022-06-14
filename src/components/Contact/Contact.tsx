import React from "react";
import styles from "./Contact.module.scss";
import SectionTitle from "../SectionTitle";
import { BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = ({ scrollRef }: any) => {
  return (
    <div className={styles.Contact} ref={scrollRef}>
      {/* <SectionTitle title="Contact" /> */}
      <div className={styles.Socials}>
        <h2>For Contact</h2>
        <BsInstagram />
        <BsTelegram />
        <BsTwitter />
        <SiGmail />
      </div>
    </div>
  );
};

export default Contact;
