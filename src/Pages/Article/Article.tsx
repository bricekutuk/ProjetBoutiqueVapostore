import { cigarettesElectroniques } from '../../assets/Componants/ArticlesEnVentes'
import './Article.css'
import { useParams } from "react-router";


function Article (){
  const { modele } = useParams ();
    return<>
    <h1>Produit { modele }</h1>
    <section className='CigCard'>
      {cigarettesElectroniques.map((cig)=>{
        return(
          <div className='CigGlobalCard'>
            <p>{cig.modele}</p>
            <p>{cig.type}</p>
            <p>{cig.prix}</p>
          </div>
        )
      })}
    </section>    
    </>
}

export default Article;