import { useState } from "react";
import type { Produit } from "../../types/produit";
import { usePanier } from "../../context/PanierContext";
import "./ProduitCard.css";

interface ProduitCardProps {
	produit: Produit;
}

function ProduitCard({ produit }: ProduitCardProps) {
	const { ajouter } = usePanier();
	const [ajoute, setAjoute] = useState(false);

	async function handleAjouter() {
		await ajouter(produit.id, 1);
		setAjoute(true);
		setTimeout(() => setAjoute(false), 1500);
	}

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
				onClick={handleAjouter}
				disabled={ajoute}
			>
				{ajoute ? "Ajouté ✓" : "Ajouter au panier"}
			</button>
		</article>
	);
}

export default ProduitCard;
