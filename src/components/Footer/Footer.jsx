import "./Footer.css";

function Footer() {// Composant du footer pour afficher le logo et les droits d'auteur
  return (
    <footer className="footer">
      <img src="./src/images/LOGO.svg" alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
