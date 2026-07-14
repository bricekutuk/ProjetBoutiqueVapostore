import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import type { Utilisateur } from "../types/utilisateur";

interface AuthContextType {
	user: Utilisateur | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, nom: string) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = "http://localhost:5000/api/auth";

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<Utilisateur | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function checkAuth() {
			try {
				const response = await fetch(`${API_URL}/me`, {
					credentials: "include",
				});
				if (response.ok) {
					const data: Utilisateur = await response.json();
					setUser(data);
				}
			} catch {
				setUser(null);
			} finally {
				setLoading(false);
			}
		}
		checkAuth();
	}, []);

	async function login(email: string, password: string) {
		const response = await fetch(`${API_URL}/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ email, password }),
		});
		if (!response.ok) {
			const data = await response.json();
			throw new Error(data.message || "Erreur de connexion");
		}
		const data: Utilisateur = await response.json();
		setUser(data);
	}

	async function register(email: string, password: string, nom: string) {
		const response = await fetch(`${API_URL}/register`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ email, password, nom }),
		});
		if (!response.ok) {
			const data = await response.json();
			throw new Error(data.message || "Erreur d'inscription");
		}
		const data: Utilisateur = await response.json();
		setUser(data);
	}

	async function logout() {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, loading, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error(
			"useAuth doit etre utilise a l'interieur d'un AuthProvider",
		);
	}
	return context;
}
