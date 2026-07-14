import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import "./Connexion.css";

function Connexion() {
	const [mode, setMode] = useState<"login" | "register">("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [nom, setNom] = useState("");
	const [erreur, setErreur] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const { login, register } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setErreur(null);
		setLoading(true);

		try {
			if (mode === "login") {
				await login(email, password);
			} else {
				await register(email, password, nom);
			}
			navigate("/");
		} catch (err) {
			setErreur(err instanceof Error ? err.message : "Une erreur est survenue");
		} finally {
			setLoading(false);
		}
	}

	return (
		<section className="connexion">
			<h1 className="connexion__titre">
				{mode === "login" ? "Connexion" : "Créer un compte"}
			</h1>

			<form className="connexion__form" onSubmit={handleSubmit}>
				{mode === "register" && (
					<label className="connexion__champ">
						Nom
						<input
							type="text"
							value={nom}
							onChange={(e) => setNom(e.target.value)}
							required
						/>
					</label>
				)}

				<label className="connexion__champ">
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>

				<label className="connexion__champ">
					Mot de passe
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						minLength={8}
					/>
				</label>

				{erreur && <p className="connexion__erreur">{erreur}</p>}

				<button type="submit" className="connexion__submit" disabled={loading}>
					{loading
						? "Chargement..."
						: mode === "login"
							? "Se connecter"
							: "S'inscrire"}
				</button>
			</form>

			<button
				type="button"
				className="connexion__switch"
				onClick={() => {
					setMode(mode === "login" ? "register" : "login");
					setErreur(null);
				}}
			>
				{mode === "login"
					? "Pas encore de compte ? S'inscrire"
					: "Déjà un compte ? Se connecter"}
			</button>
		</section>
	);
}

export default Connexion;
