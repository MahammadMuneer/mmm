import React from "react";
import "./App.scss";
import LinksContainer from "./components/LinksContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/Pages/Pages";
import { Page2 } from "./components/Pages/Pages";
import { Page3 } from "./components/Pages/Pages";
import { Page4 } from "./components/Pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LinksContainer />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
