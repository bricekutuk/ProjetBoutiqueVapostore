import './Home.css'
import CeHome from '../../assets/Images/VapePageHome.jpg'
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

function Home() {
  return   <>
  <h1 className='titreAccroche'>Votre référence en matière de vape. Des produits certifiés, des conseils experts, une expérience sans compromis.</h1>
  <img src={CeHome} alt="CigaretteElectroniqueEnHautPage" className='CEEnTete'/>
  <p className='paraAccroche'>Nouveau ou expérimenté, il y a toujours quelque chose à découvrir. Plongez dans notre catalogue de dispositifs soigneusement sélectionnés ou explorez nos saveurs les plus populaires.</p>
  <button type='button' className='btnEgarette'>Voir les E-garette</button>
  <button type='button' className='btnSaveurs'>Explorer les saveurs</button>
  </>
}

export default Home;