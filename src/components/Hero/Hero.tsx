import React, { lazy, Suspense } from "react";
import texts from "../../lib/constants";
import styles from "./Hero.module.scss";
import scrollToSection from "../../functions/scroll";

interface HeroProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ projectsRef }: HeroProps) => {
  const goToBelowSection = () => {
    scrollToSection(projectsRef);
  };
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroText}>
        <p>
          {texts.HERO_TEXT1}
          <span>{texts.HERO_TEXT2}</span>
        </p>
        <p>{texts.HERO_TEXT3}</p>
        <img
          src={require("../../assets/down_arrow.png")}
          alt=""
          loading="lazy"
          className={styles.DownArrowIcon}
          onClick={goToBelowSection}
        />
      </div>
    </div>
  );
};

export default Hero;
