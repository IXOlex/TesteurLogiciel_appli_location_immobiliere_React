import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {// Composant de carte pour afficher les logements sur la page d'accueil
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card-img" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;

