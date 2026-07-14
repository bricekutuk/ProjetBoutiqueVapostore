import "./NavBar.css";
import { Link, Outlet } from "react-router";
import { ShoppingCart, UserRound } from "lucide-react";

import NewLogo from "../../assets/Images/nouveauLogo.png";

function NavBar() {
	return (
		<>
			<div className="Navbar">
				<Link to="/">
					<img src={NewLogo} alt="nouveauLogo" className="nouveauLogo" />
				</Link>
				<ul className="Liens">
					<Link to="/">
						<li>Home</li>
					</Link>

					<Link to="/Catalogue">
						<li>Catalogue</li>
					</Link>

					<Link to="/Cigarette">
						<li>Cigarette</li>
					</Link>

					<Link to="/Gout">
						<li>Gout</li>
					</Link>

					<Link to="/Accesoires">
						<li>Accesoires</li>
					</Link>

					<Link to="Guides">
						<li>Guides</li>
					</Link>
				</ul>
				<div className="icons">
					<Link to="/Panier">
						{" "}
						<ShoppingCart />
					</Link>
					<Link to="Connexion">
						{" "}
						<UserRound />
					</Link>
				</div>
			</div>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default NavBar;
