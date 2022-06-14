import React from "react";
import styles from "./Profile.module.scss";
import SectionTitle from "../SectionTitle";

const Profile = ({ scrollRef }: any) => {
  return (
    <div className={styles.Profile} ref={scrollRef}>
      <SectionTitle title="profile" />
    </div>
  );
};

export default Profile;
