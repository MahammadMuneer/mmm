import React from "react";
import styles from "./LinksContainer.module.scss";

import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

const LinksContainer = () => {
  const links = [
    { label: "Page 1", url: "/page1" },
    { label: "Page 2", url: "/page2" },
    { label: "Page 3", url: "/page3" },
    { label: "Page 4", url: "/page4" },
  ];
  return (
    <main className={styles.LinksContainer}>
      <DocumentTitle title={"MMM | Home"} />
      <h3>Pages</h3>

      {links.map((link) => (
        <div>
          <Link to={link.url}>{link.label}</Link>
        </div>
      ))}
    </main>
  );
};

export default LinksContainer;
