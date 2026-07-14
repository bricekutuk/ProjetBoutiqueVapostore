import { useState } from "react";
import "./App.css";

// page components
import NavBar from "./components/Navbar/NavBar";

// the App

function App() {
	const [currentLocation, setCurrentLocation] = useState("/");

	return <NavBar />;
}

export default App;
