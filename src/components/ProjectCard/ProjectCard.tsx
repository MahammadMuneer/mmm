import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";

import { RiShareBoxFill } from "react-icons/ri";

const ProjectCard = ({ imageUrl, siteUrl }: any) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectImageContainer}>
        <img src={imageUrl} alt="" loading="lazy" />
      </div>
      <div className={styles.Transparent}></div>
      <div className={styles.ProjectLink}>
        <a href={siteUrl} target="_blank" rel="noreferrer">
          Visit site
          <span>
            <RiShareBoxFill />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
