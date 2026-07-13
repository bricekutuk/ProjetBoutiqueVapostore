import { useEffect, useState } from "react";
import type { Produit } from "../types/produit";

export function useProduits(categorie?: string | string[]) {
	const [produits, setProduits] = useState<Produit[]>([]);
	const [loading, setLoading] = useState(true);
	const [erreur, setErreur] = useState<string | null>(null);

	const categorieKey = Array.isArray(categorie)
		? categorie.join(",")
		: categorie;

	useEffect(() => {
		async function fetchProduits() {
			setLoading(true);
			try {
				const url = categorieKey
					? `http://localhost:5000/api/produits?categorie=${categorieKey}`
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
	}, [categorieKey]);

	return { produits, loading, erreur };
}
