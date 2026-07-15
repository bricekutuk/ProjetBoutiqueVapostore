import { useProduits } from "../../hooks/useProduits";
import ProduitCard from "../../components/ProduitCard/ProduitCard";
import "./Cigarette.css";

function Cigarette() {
	const { produits, loading, erreur } = useProduits(["kit"]);

	if (loading) return <p>Chargement des appareils...</p>;
	if (erreur) return <p>{erreur}</p>;

	return (
		<>
			<h1>
				L'Art de la Vape <br />
				Technologique
			</h1>
			<p>
				Explorez notre collection d'appareils haut de gamme, des pods intuitifs
				aux mods surpuissants, conçus pour une expérience sensorielle sans
				compromis.
			</p>
			<section className="cigarette__grille">
				{produits.map((produit) => (
					<ProduitCard key={produit.id} produit={produit} />
				))}
			</section>
		</>
	);
}

export default Cigarette;
