import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Gout.css";

function Gout() {
	const { produits, loading, erreur } = useProduits("e-liquide");

	if (loading) return <p>Chargement des aromes...</p>;
	if (erreur) return <p>{erreur}</p>;

	return (
		<section className="gout">
			<h1>Aromes Concentrés</h1>
			<div className="gout__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Gout;
