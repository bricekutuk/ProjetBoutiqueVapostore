import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Cigarette.css";

function Cigarette() {
	const { produits, loading, erreur } = useProduits(["kit"]);

	if (loading)
		return <p className="cigarette__message">Chargement des appareils...</p>;
	if (erreur)
		return (
			<p className="cigarette__message cigarette__message--erreur">{erreur}</p>
		);

	return (
		<section className="cigarette">
			<h1 className="cigarette__titre">
				L'Art de la Vape <br />
				Technologique
			</h1>
			<p className="cigarette__texte">
				Explorez notre collection d'appareils haut de gamme, des pods intuitifs
				aux mods surpuissants, conçus pour une expérience sensorielle sans
				compromis.
			</p>
			<div className="cigarette__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</div>
		</section>
	);
}

export default Cigarette;
