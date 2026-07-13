import { useState } from "react";
import "./App.css";

// page components
import NavBar from "./assets/Componants/NavBar";
// import SmokeBackground from "./assets/Componants/SmokeBackground";

// the App

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
    <NavBar/>
    {/* <SmokeBackground /> */}
    </>
  );
}

export default App