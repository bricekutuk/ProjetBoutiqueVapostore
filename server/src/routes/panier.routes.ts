import { Router } from "express";
import {
	getPanier,
	addToPanier,
	updatePanierItem,
	removeFromPanier,
} from "../controllers/panier.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", requireAuth, getPanier);
router.post("/", requireAuth, addToPanier);
router.put("/:produitId", requireAuth, updatePanierItem);
router.delete("/:produitId", requireAuth, removeFromPanier);

export default router;
