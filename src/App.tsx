import { useState } from "react";

import SmokeBackground from "./assets/Componants/SmokeBackground";

import "./App.css";

// page components

// import Home from "./Pages/Home";
// import About from './Pages/About';
import NavBar from "./assets/Componants/navBar";

// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
    <SmokeBackground />
    <NavBar/>
      {/* <nav>
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
      </main> */}
    </>
  );
}

export default App