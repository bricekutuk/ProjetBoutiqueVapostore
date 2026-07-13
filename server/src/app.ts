import express from "express";
import produitRoutes from "./routes/produit.routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import pool from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(
	cors({
		origin: "http://localhost:5173", // URL par défaut de Vite en dev
		credentials: true, // nécessaire pour envoyer/recevoir des cookies (JWT httpOnly)
	}),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/produits", produitRoutes);

// Route de test pour vérifier la connexion MySQL
app.get("/api/health", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT 1 + 1 AS result");
		res.json({ status: "ok", db: "connected", test: rows });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ status: "error", message: "Database connection failed" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
