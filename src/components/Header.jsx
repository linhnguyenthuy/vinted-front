import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = ({ token, handleToken }) => {
  const [searchTerm, setSearchTerm] = useState("");
  <input
    type="text"
    placeholder="Search.."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
  />;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 3%",
        gap: `3%`,
        marginTop: `20px`,
      }}
    >
      <Link to="/">
        <img
          src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
          alt=""
          style={{ width: `100px` }}
        />
      </Link>
      <form onSubmit={handleSubmit} style={{ width: `60%` }}>
        <input
          type="text"
          placeholder="Recherche les articles"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{
            width: `80%`,
            height: `30px`,
            marginRight: `10px`,
            color: `#b4b4b4`,
          }}
        />
        <button type="submit">Rechercher</button>
      </form>
      <span>
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
            style={{ color: `red` }}
          >
            Déconnection
          </button>
        ) : (
          <div>
            <Link to="/signup" style={{ marginRight: `10px` }}>
              <button
                style={{
                  height: `30px`,
                  border: `1px solid #0ab1ba`,
                  color: `#0ab1ba`,
                  backgroundColor: `#fff`,
                  borderRadius: `1.5vh`,
                }}
              >
                S'inscrire
              </button>
            </Link>
            <Link to="/login">
              <button
                style={{
                  height: `30px`,
                  border: `1px solid #0ab1ba`,
                  color: `#0ab1ba`,
                  backgroundColor: `#fff`,
                  borderRadius: `1.5vh`,
                }}
              >
                Se connecter
              </button>
            </Link>
          </div>
        )}
      </span>
      <div>
        <Link
          to={token ? "/publish" : "/login"}
          style={{
            marginRight: `10px`,
          }}
        >
          <button
            style={{
              backgroundColor: `#0ab1ba`,
              color: `white`,
              border: `none`,
              height: `30px`,
              borderRadius: `1.5vh`,
            }}
          >
            Vends tes articles
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
