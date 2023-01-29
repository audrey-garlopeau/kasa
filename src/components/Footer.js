import footerLogo from "../assets/images/footer_logo.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={footerLogo} className="footer__logo" alt="logo blanc Kasa" />
            <p className="footer__copyright">© {year} Kasa. All rights reserved</p>
        </footer>
    )
}
