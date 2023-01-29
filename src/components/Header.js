import { Link } from "react-router-dom";
import headerLogo from '../assets/images/header_logo.png';
import Nav from "./Nav";

export default function Header() {
    return(
        <header className="header">
            <Link to='/' className="header__link">
                <img src={headerLogo} className="header__link--logo" alt="logo Kasa" />
            </Link>
            <Nav />

        </header>
    )
}