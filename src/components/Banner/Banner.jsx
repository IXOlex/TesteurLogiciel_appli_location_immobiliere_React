import "./Banner.css";

function Banner({ title }) {// Composant de bannière pour afficher un titre sur une image de fond
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
