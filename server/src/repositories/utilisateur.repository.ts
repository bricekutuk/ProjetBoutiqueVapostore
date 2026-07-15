import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export interface Utilisateur extends RowDataPacket {
	id: number;
	email: string;
	password_hash: string;
	nom: string;
	created_at: Date;
}

export async function findByEmail(email: string): Promise<Utilisateur | null> {
	const [rows] = await pool.query<Utilisateur[]>(
		"SELECT * FROM utilisateurs WHERE email = ?",
		[email],
	);
	return rows[0] ?? null;
}

export async function create(
	email: string,
	passwordHash: string,
	nom: string,
): Promise<number> {
	const [result] = await pool.query<ResultSetHeader>(
		"INSERT INTO utilisateurs (email, password_hash, nom) VALUES (?, ?, ?)",
		[email, passwordHash, nom],
	);
	return result.insertId;
}

export async function findById(id: number): Promise<Utilisateur | null> {
	const [rows] = await pool.query<Utilisateur[]>(
		"SELECT * FROM utilisateurs WHERE id = ?",
		[id],
	);
	return rows[0] ?? null;
}
