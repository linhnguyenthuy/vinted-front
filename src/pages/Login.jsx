import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorMessage("");
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response.data);
      // Cookies.set("token", response.data.token);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response.data.message === "User not found") {
        setErrorMessage("Il faut remplir l'email");
      } else if (error.response.data.message === "undefined") {
        setErrorMessage("Il faut remplir le password");
      } else {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: `column`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: `30px`,
          marginTop: `20px`,
          marginBottom: `20px`,
        }}
      >
        Se Connecter
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: `column`,
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            style={{
              marginTop: `10px`,
              marginBottom: `10px`,
            }}
          />
          <input
            type="password"
            placeholder="abcABC"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            style={{
              marginTop: `10px`,
              marginBottom: `10px`,
            }}
          />
          <input
            type="submit"
            value="Se Connecter"
            style={{
              marginTop: `10px`,
              marginBottom: `10px`,
            }}
          />
        </form>
        {errorMessage && (
          <p
            style={{
              color: `red`,
              marginTop: `10px`,
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            {errorMessage}
          </p>
        )}
        <Link to="/signup">Pas encore un compte? Inscrit-toi</Link>
      </div>
    </div>
  );
};
export default Login;
