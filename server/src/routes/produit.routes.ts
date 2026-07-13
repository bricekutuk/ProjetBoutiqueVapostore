import { Router } from "express";
import {
	getAllProduits,
	getProduitById,
} from "../controllers/produit.controller";

const router = Router();

router.get("/", getAllProduits);
router.get("/:id", getProduitById);

export default router;
