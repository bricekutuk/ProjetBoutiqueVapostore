import { Link, Outlet } from "react-router"
import './NavBar.css'


function NavBar() {
    return (
    <>
        <ul className='Liens'>
            <Link to="/">
            <li >Home</li>
            </Link>

            <Link to="/Article">
            <li >Article</li>
            </Link>

            <Link to="/About">
            <li >About</li>
            </Link>

        </ul>
        <main>
            <Outlet/>
        </main>
    </>
    )
}

export default NavBar;