import React, { useRef } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Contact from "./components/Contact";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          projectsRef={projectsRef}
          infoRef={infoRef}
          contactRef={contactRef}
        />
        <Hero projectsRef={projectsRef} />
        <Projects scrollRef={projectsRef} />
        <Info scrollRef={infoRef} />
        <Contact scrollRef={contactRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
