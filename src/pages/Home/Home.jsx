import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {// Composant de la page d'accueil pour afficher la bannière et les cartes des logements
  const [properties, setProperties] = useState([]);

  useEffect(() => {// Récupération des données des logements depuis l'API et stockage dans le state
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error(error));
  }, []);

  return (// Rendu de la page d'accueil avec la bannière et les cartes des logements
    <main className="home">
      <Banner title="Chez vous, partout et ailleurs" />
      <section className="box_card">
        <div className="cards">
          {properties.slice(0, 6).map((property) => (
            <Card
              key={property.id}
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Home;
