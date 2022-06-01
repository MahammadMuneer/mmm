import React from "react";
import styles from "./Profile.module.scss";
import ScrollToTop from "../ScrollToTop";
import SectionTitle from "../SectionTitle";

const Profile = ({ scrollRef }: any) => {
  return (
    <div className={styles.Profile} ref={scrollRef}>
      <SectionTitle title="profile" />
      <ScrollToTop />
    </div>
  );
};

export default Profile;
