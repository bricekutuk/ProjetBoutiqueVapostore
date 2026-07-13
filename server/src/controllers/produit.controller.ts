import { Request, Response } from "express";
import * as produitRepository from "../repositories/produit.repository";

export async function getAllProduits(req: Request, res: Response) {
	try {
		const produits = await produitRepository.findAll();
		res.json(produits);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: "Erreur lors de la recuperation des produits" });
	}
}

export async function getProduitById(req: Request, res: Response) {
	try {
		const id = Number(req.params.id);
		const produit = await produitRepository.findById(id);
		if (!produit) {
			res.status(404).json({ message: "Produit non trouve" });
			return;
		}
		res.json(produit);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: "Erreur lors de la recuperation du produit" });
	}
}
