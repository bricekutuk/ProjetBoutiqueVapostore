import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export interface PanierItem extends RowDataPacket {
	id: number;
	utilisateur_id: number;
	produit_id: number;
	quantite: number;
	nom: string;
	prix: string;
	image_url: string;
	stock: number;
}

// READ - recupere le panier avec les infos produit (jointure)
export async function findByUtilisateur(
	utilisateurId: number,
): Promise<PanierItem[]> {
	const [rows] = await pool.query<PanierItem[]>(
		`SELECT panier_items.id, panier_items.utilisateur_id, panier_items.produit_id, panier_items.quantite,
            produits.nom, produits.prix, produits.image_url, produits.stock
     FROM panier_items
     JOIN produits ON produits.id = panier_items.produit_id
     WHERE panier_items.utilisateur_id = ?`,
		[utilisateurId],
	);
	return rows;
}

// Verifie si le produit est deja dans le panier de l'utilisateur
export async function findOne(
	utilisateurId: number,
	produitId: number,
): Promise<PanierItem | null> {
	const [rows] = await pool.query<PanierItem[]>(
		"SELECT * FROM panier_items WHERE utilisateur_id = ? AND produit_id = ?",
		[utilisateurId, produitId],
	);
	return rows[0] ?? null;
}

// CREATE - ajoute un produit au panier
export async function create(
	utilisateurId: number,
	produitId: number,
	quantite: number,
): Promise<number> {
	const [result] = await pool.query<ResultSetHeader>(
		"INSERT INTO panier_items (utilisateur_id, produit_id, quantite) VALUES (?, ?, ?)",
		[utilisateurId, produitId, quantite],
	);
	return result.insertId;
}

// UPDATE - modifie la quantite d'un item existant
export async function updateQuantite(
	utilisateurId: number,
	produitId: number,
	quantite: number,
): Promise<void> {
	await pool.query(
		"UPDATE panier_items SET quantite = ? WHERE utilisateur_id = ? AND produit_id = ?",
		[quantite, utilisateurId, produitId],
	);
}

// DELETE - retire un produit du panier
export async function remove(
	utilisateurId: number,
	produitId: number,
): Promise<void> {
	await pool.query(
		"DELETE FROM panier_items WHERE utilisateur_id = ? AND produit_id = ?",
		[utilisateurId, produitId],
	);
}
