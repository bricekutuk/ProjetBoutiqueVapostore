import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware";
import * as panierRepository from "../repositories/panier.repository";

export async function getPanier(req: AuthRequest, res: Response) {
	try {
		if (!req.userId) {
			res.status(401).json({ message: "Authentification requise" });
			return;
		}
		const items = await panierRepository.findByUtilisateur(req.userId);
		res.json(items);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: "Erreur lors de la recuperation du panier" });
	}
}

export async function addToPanier(req: AuthRequest, res: Response) {
	try {
		if (!req.userId) {
			res.status(401).json({ message: "Authentification requise" });
			return;
		}

		const { produitId, quantite } = req.body;
		if (!produitId || !quantite || quantite < 1) {
			res
				.status(400)
				.json({ message: "produitId et quantite (>= 1) sont requis" });
			return;
		}

		const existant = await panierRepository.findOne(req.userId, produitId);

		if (existant) {
			// le produit est deja dans le panier, on augmente la quantite
			await panierRepository.updateQuantite(
				req.userId,
				produitId,
				existant.quantite + quantite,
			);
		} else {
			await panierRepository.create(req.userId, produitId, quantite);
		}

		const panier = await panierRepository.findByUtilisateur(req.userId);
		res.status(201).json(panier);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur lors de l'ajout au panier" });
	}
}

export async function updatePanierItem(req: AuthRequest, res: Response) {
	try {
		if (!req.userId) {
			res.status(401).json({ message: "Authentification requise" });
			return;
		}

		const produitId = Number(req.params.produitId);
		const { quantite } = req.body;

		if (!quantite || quantite < 1) {
			res
				.status(400)
				.json({ message: "quantite doit etre superieure ou egale a 1" });
			return;
		}

		await panierRepository.updateQuantite(req.userId, produitId, quantite);
		const panier = await panierRepository.findByUtilisateur(req.userId);
		res.json(panier);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: "Erreur lors de la mise a jour du panier" });
	}
}

export async function removeFromPanier(req: AuthRequest, res: Response) {
	try {
		if (!req.userId) {
			res.status(401).json({ message: "Authentification requise" });
			return;
		}

		const produitId = Number(req.params.produitId);
		await panierRepository.remove(req.userId, produitId);
		const panier = await panierRepository.findByUtilisateur(req.userId);
		res.json(panier);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur lors de la suppression" });
	}
}
