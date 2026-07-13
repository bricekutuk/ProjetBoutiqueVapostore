import { useProduits } from "../../hook/useProduit";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Gout.css";

function Aromes() {
	const { produits, loading, erreur } = useProduits("e-liquide");

	if (loading) return <p>Chargement des aromes...</p>;
	if (erreur) return <p>{erreur}</p>;

	return (
		<section className="aromes">
			<h1>Aromes Concentrés</h1>
			<div className="aromes__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Aromes;
