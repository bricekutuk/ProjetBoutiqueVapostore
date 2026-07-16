import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Acessoires.css";

function Acessoires() {
	const { produits, loading, erreur } = useProduits([
		"box",
		"resistance",
		"clearomiseur",
	]);

	if (loading)
		return <p className="acessoires__message">Chargement du materiel...</p>;
	if (erreur)
		return (
			<p className="acessoires__message acessoires__message--erreur">
				{erreur}
			</p>
		);

	return (
		<section className="acessoires">
			<h1 className="acessoires__titre">Matériel de Haute Précision</h1>
			<p className="acessoires__texte">
				Box, résistances et clearomiseurs pour composer votre setup sur mesure,
				pièce par pièce.
			</p>
			<div className="acessoires__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Acessoires;
