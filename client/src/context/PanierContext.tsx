import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import type { PanierItem } from "../types/panier";
import { useAuth } from "./AuthContext";

interface PanierContextType {
	items: PanierItem[];
	loading: boolean;
	ajouter: (produitId: number, quantite: number) => Promise<void>;
	modifierQuantite: (produitId: number, quantite: number) => Promise<void>;
	retirer: (produitId: number) => Promise<void>;
}

const PanierContext = createContext<PanierContextType | undefined>(undefined);

const API_URL = "http://localhost:5000/api/panier";

export function PanierProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<PanierItem[]>([]);
	const [loading, setLoading] = useState(true);
	const { user } = useAuth();

	useEffect(() => {
		async function fetchPanier() {
			if (!user) {
				setItems([]);
				setLoading(false);
				return;
			}
			try {
				const response = await fetch(API_URL, { credentials: "include" });
				if (response.ok) {
					const data: PanierItem[] = await response.json();
					setItems(data);
				}
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		fetchPanier();
	}, [user]);

	async function ajouter(produitId: number, quantite: number) {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ produitId, quantite }),
		});
		if (response.ok) {
			const data: PanierItem[] = await response.json();
			setItems(data);
		}
	}

	async function modifierQuantite(produitId: number, quantite: number) {
		const response = await fetch(`${API_URL}/${produitId}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ quantite }),
		});
		if (response.ok) {
			const data: PanierItem[] = await response.json();
			setItems(data);
		}
	}

	async function retirer(produitId: number) {
		const response = await fetch(`${API_URL}/${produitId}`, {
			method: "DELETE",
			credentials: "include",
		});
		if (response.ok) {
			const data: PanierItem[] = await response.json();
			setItems(data);
		}
	}

	return (
		<PanierContext.Provider
			value={{ items, loading, ajouter, modifierQuantite, retirer }}
		>
			{children}
		</PanierContext.Provider>
	);
}

export function usePanier() {
	const context = useContext(PanierContext);
	if (!context) {
		throw new Error(
			"usePanier doit etre utilise a l'interieur d'un PanierProvider",
		);
	}
	return context;
}
