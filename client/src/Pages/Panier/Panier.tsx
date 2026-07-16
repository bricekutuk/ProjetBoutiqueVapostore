import { useNavigate } from "react-router";
import { usePanier } from "../../context/PanierContext";
import "./Panier.css";

function Panier() {
	const { items, loading, modifierQuantite, retirer } = usePanier();
	const navigate = useNavigate();

	async function validerCommande() {
		try {
			const response = await fetch("http://localhost:5000/api/commandes", {
				method: "POST",
				credentials: "include",
			});
			if (!response.ok) throw new Error("Erreur lors de la validation");
			navigate("/Confirmation");
		} catch (err) {
			console.error(err);
			alert("Une erreur est survenue lors de la validation de la commande");
		}
	}

	if (loading)
		return <p className="panier__message">Chargement du panier...</p>;

	if (items.length === 0) {
		return <p className="panier__message">Votre panier est vide.</p>;
	}

	const total = items.reduce(
		(acc, item) => acc + Number(item.prix) * item.quantite,
		0,
	);

	return (
		<section className="panier">
			<h1 className="panier__titre">Votre panier</h1>

			<div className="panier__liste">
				{items.map((item) => (
					<div key={item.id} className="panier-item">
						<img
							className="panier-item__image"
							src={item.image_url}
							alt={item.nom}
						/>

						<div className="panier-item__infos">
							<h2 className="panier-item__nom">{item.nom}</h2>
							<p className="panier-item__prix">
								{Number(item.prix).toFixed(2)} €
							</p>
						</div>

						<div className="panier-item__quantite">
							<button
								type="button"
								onClick={() =>
									modifierQuantite(item.produit_id, item.quantite - 1)
								}
								disabled={item.quantite <= 1}
							>
								-
							</button>
							<span>{item.quantite}</span>
							<button
								type="button"
								onClick={() =>
									modifierQuantite(item.produit_id, item.quantite + 1)
								}
								disabled={item.quantite >= item.stock}
							>
								+
							</button>
						</div>

						<p className="panier-item__sous-total">
							{(Number(item.prix) * item.quantite).toFixed(2)} €
						</p>

						<button
							type="button"
							className="panier-item__supprimer"
							onClick={() => retirer(item.produit_id)}
						>
							Retirer
						</button>
					</div>
				))}
			</div>

			<div className="panier__total">
				<span>Total</span>
				<span>{total.toFixed(2)} €</span>
			</div>

			<button
				type="button"
				className="panier__valider"
				onClick={validerCommande}
			>
				Valider la commande
			</button>
		</section>
	);
}

export default Panier;
