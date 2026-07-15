import "./Home.css";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

function Home() {
	const CeHome = "/images/VapePageHome.jpg";

	return (
		<>
			<div className="heroContainer">
				<img
					src={CeHome}
					alt="CigaretteElectroniqueEnHautPage"
					className="CEEnTete"
				/>
				<div className="heroContent">
					<h1 className="titreAccroche">
						Votre référence en matière de vape. Des produits certifiés, des
						conseils experts, une expérience sans compromis.
					</h1>
					<p className="paraAccroche">
						Nouveau ou expérimenté, il y a toujours quelque chose à découvrir.
						Plongez dans notre catalogue de dispositifs soigneusement
						sélectionnés ou explorez nos saveurs les plus populaires.
					</p>
					<div className="btnGroup">
						<button type="button" className="btnEgarette">
							Voir les E-garette
						</button>
						<button type="button" className="btnSaveurs">
							Explorer les saveurs
						</button>
					</div>
				</div>
			</div>

			<h2>Nos meilleurs produits</h2>
			<p>
				Découvrez nos produits les plus populaires, soigneusement sélectionnés
				par nos clients pour vous offrir la meilleure expérience de vapotage.
			</p>
		</>
	);
}

export default Home;
