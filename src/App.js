import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <nav>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span> | </span>
            <span>
              <Link to="/about">About</Link>
            </span>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
