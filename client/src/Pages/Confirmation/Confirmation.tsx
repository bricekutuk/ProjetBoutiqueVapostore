import { Link } from "react-router";
import "./Confirmation.css";

function Confirmation() {
	return (
		<section className="confirmation">
			<h1 className="confirmation__titre">Merci pour votre commande !</h1>
			<p className="confirmation__texte">
				Votre commande a bien été enregistrée. Vous recevrez un email de
				confirmation prochainement.
			</p>
			<Link to="/Catalogue" className="confirmation__lien">
				Continuer mes achats
			</Link>
		</section>
	);
}

export default Confirmation;
