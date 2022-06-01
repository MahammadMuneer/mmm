import React, { useRef } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          projectsRef={projectsRef}
          profileRef={profileRef}
          contactRef={contactRef}
        />
        <Hero profileRef={profileRef} />
        <Profile scrollRef={profileRef} />
        <Projects scrollRef={projectsRef} />
        <Contact scrollRef={contactRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
