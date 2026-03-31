import { Link, Outlet } from "react-router"
import './NavBar.css'


function NavBar() {
    return (
    <>
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>

            <Link to="">
            <li>Contact</li>
            </Link>

            <Link to="/About">
            <li>About</li>
            </Link>

        </ul>
        <main>
            <Outlet/>
        </main>
    </>
    )
}

export default NavBar;