import React, { useRef } from "react";
import styles from "./App.module.scss";
import Navbar from "../Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../Hero";
import Projects from "../Projects";
import Profile from "../Profile";
import Contact from "../Contact";
import ScrollToTop from "../ScrollToTop";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        {/* <Navbar
          projectsRef={projectsRef}
          profileRef={profileRef}
          contactRef={contactRef}
        /> */}
        <Hero goBelowRef={projectsRef} />
        {/* <Profile scrollRef={profileRef} /> */}
        <Projects scrollRef={projectsRef} />
        <Contact scrollRef={contactRef} />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
