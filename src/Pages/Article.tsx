import { cigarettesElectroniques } from '../assets/Componants/ArticlesEnVentes'



function Article (){
    return<>
    <h1>Produit</h1>
     <ul className='ArticleEnVentes'>
      {cigarettesElectroniques.map((cig) => (
        <li key={cig.modele}>
          {cig.modele} — {cig.type} — {cig.prix} €
        </li>
      ))}
    </ul>
    
    </>
}

export default Article;