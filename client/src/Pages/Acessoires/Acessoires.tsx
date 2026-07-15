import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Acessoires.css";

function Acessoires() {
	const { produits, loading, erreur } = useProduits([
		"box",
		"resistance",
		"clearomiseur",
	]);

	if (loading) return <p>Chargement du materiel...</p>;
	if (erreur) return <p>{erreur}</p>;

	return (
		<section className="acessoires">
			<h1>Matériel de Haute Précision</h1>
			<div className="acessoires__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Acessoires;
