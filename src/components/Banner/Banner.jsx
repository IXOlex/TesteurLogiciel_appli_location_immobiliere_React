function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
