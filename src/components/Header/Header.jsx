import { Link } from "react-router-dom";
import logo from "../../images/LOGO_alt.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
