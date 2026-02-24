import "./Error.css"

function Error() {

  return (
    <main className="MainError">
      <div className="error"><h1>404</h1>
      </div>
        <div className="errorpage"> 
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          </div>
        <a href="/">Retourner sur la page d'accueil</a>
    </main>
  );
}

export default Error;