import { Link, Outlet } from "react-router"
import './NavBar.css'
import { ShoppingCart } from 'lucide-react';
import { UserRoundKey } from 'lucide-react';


import NewLogo from '../Images/nouveauLogo.png'


function NavBar() {
    return (
    <>

    <div className="Navbar">
        <Link to="/">
    <img src={NewLogo} alt="nouveauLogo" className="nouveauLogo" />
        </Link>
        <ul className='Liens'>
            <Link to="/">
                <li >Home</li>
            </Link>


            <Link to="/Catalogue">
                <li >Catalogue</li>
            </Link>

            <Link to="/Cigarette">
                <li >Cigarette</li>
            </Link>

            <Link to="/Gout">
                <li>Gout</li>
            </Link>


            <Link to="/Accesoires">
                <li>Accesoires</li>
            </Link>


            <Link to="Guides">
                <li>Guides</li>
            </Link>
            
        </ul>
        <div className="icons">
            <Link to="/Panier">
                <li><ShoppingCart color="black"/></li>
            </Link>
            <Link to="Connexion">
                <UserRoundKey color="black"/>
            </Link>
        </div>
    </div>
        <main>
            <Outlet/>
        </main>
    </>
    )
}

export default NavBar;