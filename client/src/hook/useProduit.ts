import { useEffect, useState } from "react";
import type { Produit } from "../types/produit";

export function useProduits(categorie?: string) {
	const [produits, setProduits] = useState<Produit[]>([]);
	const [loading, setLoading] = useState(true);
	const [erreur, setErreur] = useState<string | null>(null);

	useEffect(() => {
		async function fetchProduits() {
			setLoading(true);
			try {
				const url = categorie
					? `http://localhost:5000/api/produits?categorie=${categorie}`
					: "http://localhost:5000/api/produits";
				const response = await fetch(url);
				if (!response.ok) throw new Error("Erreur reseau");
				const data: Produit[] = await response.json();
				setProduits(data);
			} catch (err) {
				setErreur("Impossible de charger les produits");
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		fetchProduits();
	}, [categorie]);

	return { produits, loading, erreur };
}
