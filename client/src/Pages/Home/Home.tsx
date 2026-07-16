import "./Home.css";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

function Home() {
	const imageHero = "/images/imgAccueil.avif";

	return (
		<section className="home">
			<div className="home__hero">
				<img
					src={imageHero}
					alt="Cigarette electronique en avant de la boutique"
					className="home__hero-image"
				/>
				<div className="home__hero-content">
					<h1 className="home__titre">
						Votre référence en matière de vape. Des produits certifiés, des
						conseils experts, une expérience sans compromis.
					</h1>
					<p className="home__texte">
						Nouveau ou expérimenté, il y a toujours quelque chose à découvrir.
						Plongez dans notre catalogue de dispositifs soigneusement
						sélectionnés ou explorez nos saveurs les plus populaires.
					</p>
					<div className="home__actions">
						<button type="button" className="home__btn home__btn--primary">
							Voir les e-cigarettes
						</button>
						<button type="button" className="home__btn home__btn--secondary">
							Explorer les saveurs
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
