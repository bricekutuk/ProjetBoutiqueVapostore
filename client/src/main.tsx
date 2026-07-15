import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
// Page components
import Home from "./Pages/Home/Home.tsx";
import Catalogue from "./Pages/Catalogue/Catalogue.tsx";
import Cigarette from "./Pages/Cigarette/Cigarette.tsx";
import Gout from "./Pages/Gout/Gout.tsx";
import Accesoires from "./Pages/Acessoires/Acessoires.tsx";
import Guides from "./Pages/Guides/Guides.tsx";
import Panier from "./Pages/Panier/Panier.tsx";
import Connexion from "./Pages/Connexion/Connexion.tsx";
import { AuthProvider } from "./context/AuthContext";
import { PanierProvider } from "./context/PanierContext.tsx";

import "./index.css";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Catalogue",
				element: <Catalogue />,
			},
			{
				path: "/Cigarette",
				element: <Cigarette />,
			},
			{
				path: "/Gout",
				element: <Gout />,
			},
			{
				path: "/Accesoires",
				element: <Accesoires />,
			},
			{
				path: "/Guides",
				element: <Guides />,
			},
			{
				path: "/Panier",
				element: <Panier />,
			},
			{
				path: "/Connexion",
				element: <Connexion />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(
		<AuthProvider>
			<PanierProvider>
				<RouterProvider router={router} />
			</PanierProvider>
		</AuthProvider>,
	);
}
