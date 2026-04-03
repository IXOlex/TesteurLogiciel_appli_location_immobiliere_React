import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./Housing.css";
import Slide from "../../components/Slide/Slide";
import Collapse from "../../components/About/Collapse";

function Housing() {// Composant de la page de logement pour afficher les détails d'un logement spécifique
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {// Récupération des données des logements depuis l'API et stockage dans le state
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {// Affichage d'un message de chargement pendant la récupération des données
    return <p>Loading...</p>;
  }

  const logement = properties.find(item => item.id === id.toString());// Recherche du logement correspondant à l'ID dans les données récupérées

  if (!logement) {// Affichage de la page d'erreur si le logement n'est pas trouvé
    return <Error />;
  }

  const nameParts = logement.host.name.split(" ");// Séparation du nom de l'hôte en parties pour l'affichage dans la section d'information du logement

  return (// Rendu de la page de logement avec les détails du logement, le diaporama et les sections de description et d'équipements
    <main className="main_block">

      <Slide pictures={logement.pictures} />

      <div className="housing-info">

        <div className="housing-left">
          <div className="housing-details">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="housing-tags">
            {logement.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-right">

          <div className="housing-host">
            <p>
              {nameParts[0]} <br />
              {nameParts.slice(1).join(" ")}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="housing-rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}>
                <i
                  className={`fa-solid fa-star ${num <= logement.rating ? "active" : "inactive"
                    }`}
                ></i>
              </span>
            ))}
          </div>

        </div>

      </div>
      <div className="housing-collapse">
        <div className="collapse_block">
          <Collapse title="Description">
            {logement.description}
          </Collapse>

          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main >
  );
}

export default Housing;