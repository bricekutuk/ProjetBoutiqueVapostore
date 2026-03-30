import { useState } from "react";
import SmokeBackground from "./Pages/SmokeBackground";

import "./App.css";

// page components

import Home from "./Pages/Home";
import About from './Pages/About';

// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
    <SmokeBackground />
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button" className="ButtonNav">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button" className="ButtonNav">
          About
        </button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App