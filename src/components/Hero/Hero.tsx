import React, { lazy, Suspense } from "react";
import texts from "../../lib/constants";
import styles from "./Hero.module.scss";
import scrollToSection from "../../functions/scroll";

interface HeroProps {
  goBelowRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ goBelowRef }: HeroProps) => {
  const goToBelowSection = () => {
    scrollToSection(goBelowRef);
  };

  const companyLink = "https://www.robosoftin.com/";

  return (
    <div className={styles.Hero}>
      <div className={styles.HeroText}>
        <div className={styles.TextsContainer} style={{ color: "red" }}>
          <p>Mahammad Muneer</p>
          <p>
            Frontend Developer @{" "}
            <a href={companyLink}>Robosoft Technologies Pvt Ltd</a>
          </p>
        </div>
        {/* <div className={styles.MediumScreen} style={{ color: "blue" }}>
          <p>{texts.HERO_TEXT1}</p>
          <span>{texts.HERO_TEXT2}</span>
          <p>{texts.HERO_TEXT3}</p>
        </div>
        <div className={styles.SmallScreen} style={{ color: "green" }}>
          <p>{texts.HERO_TEXT1}</p>
          <span>{texts.HERO_TEXT2}</span>
          <p>{texts.HERO_TEXT3}</p>
        </div> */}
      </div>

      <img
        src={require("../../assets/down_arrow.png")}
        alt=""
        loading="lazy"
        className={styles.DownArrowIcon}
        onClick={goToBelowSection}
      />
    </div>
  );
};

export default Hero;
