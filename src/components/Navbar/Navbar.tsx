import React from "react";
import styles from "./Navbar.module.scss";

import { AiFillCode } from "react-icons/ai";
import { BsPatchQuestion } from "react-icons/bs";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h2>
        {/* <AiFillCode /> */}
        <img src={Logo} alt="" />
        MMM
      </h2>
      <button>
        <BsPatchQuestion />
      </button>
    </nav>
  );
};

export default Navbar;
