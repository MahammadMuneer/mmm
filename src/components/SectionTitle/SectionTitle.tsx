import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h1 className={styles.SectionTitle}>{title}</h1>;
};

export default SectionTitle;
