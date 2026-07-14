import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
	userId?: number;
}

export function requireAuth(
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) {
	const token = req.cookies?.token;

	if (!token) {
		res.status(401).json({ message: "Authentification requise" });
		return;
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET) as {
			id: number;
			email: string;
		};
		req.userId = decoded.id;
		next();
	} catch (error) {
		res.status(401).json({ message: "Token invalide ou expire" });
	}
}
