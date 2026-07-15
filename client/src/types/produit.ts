export interface Produit {
	id: number;
	nom: string;
	description: string;
	prix: string;
	image_url: string;
	stock: number;
	categorie: "e-liquide" | "box" | "resistance" | "kit";
	created_at: string;
}
