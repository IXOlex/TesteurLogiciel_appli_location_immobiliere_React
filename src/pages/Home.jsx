import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import "./Home.css";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <section className="cards">
        {properties.map((property) => (
          <Card
            key={property.id}   // clé unique pour chaque carte
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
