import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Gout.css";

function Gout() {
	const { produits, loading, erreur } = useProduits("e-liquide");

	if (loading) return <p className="gout__message">Chargement des aromes...</p>;
	if (erreur)
		return <p className="gout__message gout__message--erreur">{erreur}</p>;

	return (
		<section className="gout">
			<h1 className="gout__titre">Arômes</h1>
			<p className="gout__texte">
				Une sélection d'e-liquides aux saveurs intenses et authentiques, pour
				accompagner chaque instant de vape.
			</p>
			<div className="gout__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Gout;
