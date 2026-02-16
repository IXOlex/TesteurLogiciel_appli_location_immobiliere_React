import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card-img" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;

