import { Route, Routes } from "react-router-dom";
import AppNavLinks from "./components/AppNavLinks";
import Contact from "./components/Contact";
import Home1 from "./components/Home1";
import React from "react";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <AppNavLinks />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

        <Route
          path="*"
          element={
            <h1 style={{ color: "black", marginLeft: "38%", marginTop: "20%" }}>
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
