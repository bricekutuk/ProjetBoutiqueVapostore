import "./NavBar.css";
import { Link, Outlet } from "react-router";
import { ShoppingCart, UserRound, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function NavBar() {
	const { user, logout } = useAuth();
	const NewLogo = "/images/nouveauLogo.png";

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
				</ul>
				<div className="icons">
					<Link to="/Panier">
						{" "}
						<ShoppingCart />
					</Link>

					{user ? (
						<div className="Navbar__user">
							<span className="Navbar__nom">{user.nom}</span>
							<button
								type="button"
								className="Navbar__logout"
								onClick={() => logout()}
							>
								<LogOut />
							</button>
						</div>
					) : (
						<Link to="/Connexion">
							{" "}
							<UserRound />
						</Link>
					)}
				</div>
			</div>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default NavBar;
