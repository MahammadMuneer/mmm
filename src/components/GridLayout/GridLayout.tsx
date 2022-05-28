import React, { useState } from "react";
import styles from "./GridLayout.module.scss";

const GridLayout = ({ children }: any) => {
  const [calculatedStyles, setCalculatedStyles] = useState({ height: "auto" });

  function parentWidth(elem: any) {
    // console.log("parent", elem.parentElement.clientHeight);
    // console.log("sib", elem.previousElementSibling.clientHeight);
    setCalculatedStyles({
      height: `${
        elem.parentElement.clientHeight -
        elem.previousElementSibling.clientHeight -
        16
      }px`,
    });
    // return elem.parentElement.clientWidth;
  }

  return <div className={styles.GridLayout}>{children}</div>;
};

export default GridLayout;
