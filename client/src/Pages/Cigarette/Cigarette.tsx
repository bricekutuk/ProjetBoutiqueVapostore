import { cigarettesElectroniques } from "../../Data/ArticlesEnVentes";
import "./Cigarette.css";
import { useParams } from "react-router";

function Article() {
	const { modele } = useParams();
	return (
		<>
			<h1>
				L'Art de la Vape <br />
				Technologique{modele}
			</h1>
			<p>
				Explorez notre collection d'appareils haut de gamme, des pods intuitifs
				aux mods surpuissants, conçus pour une expérience sensorielle sans
				compromis.
			</p>
		</>
	);
}

export default Article;
