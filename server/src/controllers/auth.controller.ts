import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { AuthRequest } from "../middlewares/auth.middleware";
import * as utilisateurRepository from "../repositories/utilisateur.repository";

const JWT_SECRET = process.env.JWT_SECRET as string;
const SALT_ROUNDS = 10;

export async function register(req: Request, res: Response) {
	try {
		const { email, password, nom } = req.body;

		if (!email || !password || !nom) {
			res
				.status(400)
				.json({ message: "Email, mot de passe et nom sont requis" });
			return;
		}

		const existant = await utilisateurRepository.findByEmail(email);
		if (existant) {
			res.status(409).json({ message: "Un compte existe deja avec cet email" });
			return;
		}

		const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
		const id = await utilisateurRepository.create(email, passwordHash, nom);

		const token = jwt.sign({ id, email }, JWT_SECRET, { expiresIn: "7d" });

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.status(201).json({ id, email, nom });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur lors de l'inscription" });
	}
}

export async function login(req: Request, res: Response) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			res.status(400).json({ message: "Email et mot de passe requis" });
			return;
		}

		const utilisateur = await utilisateurRepository.findByEmail(email);
		if (!utilisateur) {
			res.status(401).json({ message: "Identifiants incorrects" });
			return;
		}

		const motDePasseValide = await bcrypt.compare(
			password,
			utilisateur.password_hash,
		);
		if (!motDePasseValide) {
			res.status(401).json({ message: "Identifiants incorrects" });
			return;
		}

		const token = jwt.sign(
			{ id: utilisateur.id, email: utilisateur.email },
			JWT_SECRET,
			{ expiresIn: "7d" },
		);

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.json({
			id: utilisateur.id,
			email: utilisateur.email,
			nom: utilisateur.nom,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur lors de la connexion" });
	}
}

export async function logout(_req: Request, res: Response) {
	res.clearCookie("token");
	res.json({ message: "Deconnexion reussie" });
}

export async function me(req: AuthRequest, res: Response) {
	try {
		if (!req.userId) {
			res.status(401).json({ message: "Authentification requise" });
			return;
		}

		const utilisateur = await utilisateurRepository.findById(req.userId);
		if (!utilisateur) {
			res.status(404).json({ message: "Utilisateur non trouve" });
			return;
		}
		res.json({
			id: utilisateur.id,
			email: utilisateur.email,
			nom: utilisateur.nom,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur" });
	}
}
