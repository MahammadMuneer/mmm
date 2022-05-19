import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pages.module.scss";
import DocumentTitle from "react-document-title";

const Page1 = () => {
  return (
    <div className={styles.Pages}>
      <DocumentTitle title={"MMM | Page1"} />
      <h3>This is page 1</h3>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className={styles.Pages}>
      <DocumentTitle title={"MMM | Page2"} />
      <h3>This is page 2</h3>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
};

const Page3 = () => {
  return (
    <div className={styles.Pages}>
      <DocumentTitle title={"MMM | Page3"} />
      <h3>This is page 3</h3>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
};

const Page4 = () => {
  return (
    <div className={styles.Pages}>
      <DocumentTitle title={"MMM | Page4"} />
      <h3>This is page 4</h3>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
};

export { Page1, Page2, Page3, Page4 };
