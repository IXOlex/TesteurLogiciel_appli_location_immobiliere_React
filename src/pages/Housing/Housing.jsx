import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./Housing.css";
import Slide from "../../components/Slide/Slide";
import Collapse from "../../components/About/Collapse";

function Housing() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const logement = properties.find(item => item.id === id.toString());

  if (!logement) {
    return <Error />;
  }

  return (
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
            <p>{logement.host.name}</p>
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
    </main>
  );
}

export default Housing;