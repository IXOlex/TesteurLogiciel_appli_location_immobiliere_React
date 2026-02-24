import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
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
