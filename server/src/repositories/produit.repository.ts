import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export interface Produit extends RowDataPacket {
	id: number;
	nom: string;
	description: string;
	prix: number;
	image_url: string;
	stock: number;
	categorie: string;
	created_at: Date;
}

export async function findAll(): Promise<Produit[]> {
	const [rows] = await pool.query<Produit[]>(
		"SELECT * FROM produits ORDER BY created_at DESC",
	);
	return rows;
}

export async function findById(id: number): Promise<Produit | null> {
	const [rows] = await pool.query<Produit[]>(
		"SELECT * FROM produits WHERE id = ?",
		[id],
	);
	return rows[0] ?? null;
}
