import React from "react";
import styles from "./Projects.module.scss";
import ScrollToTop from "../ScrollToTop";

const Projects = ({ scrollRef }: any) => {
  return (
    <div className={styles.Projects} ref={scrollRef}>
      <h1>Projects</h1>
      <ScrollToTop />
    </div>
  );
};

export default Projects;
