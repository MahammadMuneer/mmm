import React from "react";
import styles from "./Navbar.module.scss";

import scrollToSection from "../../functions/scroll";

interface NavbarProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  infoRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({ projectsRef, infoRef, contactRef }: NavbarProps) => {
  const navLinks = [
    { label: "projects", elementRef: projectsRef },
    { label: "info", elementRef: infoRef },
    { label: "contact", elementRef: contactRef },
  ];

  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavLinksContainer}>
        {navLinks.map((navLink) => {
          return (
            <p
              className={styles.NavLinks}
              onClick={() => scrollToSection(navLink.elementRef)}
            >
              {navLink.label}
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
