import { usePanier } from "../../context/PanierContext";
import type { Produit } from "../../types/produit";
import "./ProduitCard.css";

interface ProduitCardProps {
	produit: Produit;
}

function ProduitCard({ produit }: ProduitCardProps) {
	const { ajouter } = usePanier();

	return (
		<article className="produit-card">
			<img
				className="produit-card__image"
				src={produit.image_url}
				alt={produit.nom}
			/>
			<h2 className="produit-card__nom">{produit.nom}</h2>
			<p className="produit-card__descriptif">{produit.description}</p>
			<p className="produit-card__prix">{Number(produit.prix).toFixed(2)} €</p>
			<button
				type="button"
				className="produit-card__ajouter"
				onClick={() => ajouter(produit.id, 1)}
			>
				Ajouter au panier
			</button>
		</article>
	);
}

export default ProduitCard;
