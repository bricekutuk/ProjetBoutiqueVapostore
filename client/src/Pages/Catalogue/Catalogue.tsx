import { useState } from "react";
import { useProduits } from "../../hook/useProduit";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Catalogue.css";

function Catalogue() {
	const [categorieFiltre, setCategorieFiltre] = useState<string | undefined>(
		undefined,
	);
	const { produits, loading, erreur } = useProduits(categorieFiltre);

	if (loading)
		return <p className="catalogue__message">Chargement des produits...</p>;
	if (erreur)
		return (
			<p className="catalogue__message catalogue__message--erreur">{erreur}</p>
		);

	return (
		<section className="catalogue">
			<h1 className="catalogue__titre">The Catalog</h1>

			<nav className="catalogue__filtres">
				{["toutes", "e-liquide", "box", "resistance", "kit"].map((cat) => (
					<button
						key={cat}
						type="button"
						className={`catalogue__filtre-btn ${categorieFiltre === (cat === "toutes" ? undefined : cat) ? "catalogue__filtre-btn--actif" : ""}`}
						onClick={() =>
							setCategorieFiltre(cat === "toutes" ? undefined : cat)
						}
					>
						{cat}
					</button>
				))}
			</nav>

			<div className="catalogue__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Catalogue;
