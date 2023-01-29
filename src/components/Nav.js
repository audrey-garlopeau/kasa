import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <Link to='/' className="navbar__link">Accueil</Link>
            <Link to='/about' className="navbar__link">A Propos</Link>
        </nav>
    )
}