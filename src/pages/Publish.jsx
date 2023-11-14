import { useState } from "react";
import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [pictures, setPictures] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", place);
      formData.append("price", price);
      formData.append("picture", pictures);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return token ? (
    <div
      style={{
        marginTop: `10vh`,
        display: `flex`,

        flexDirection: `column`,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ marginBottom: `2vh`, fontSize: "30px", color: `#0ab1ba` }}>
        VENDS TON ARTICLE
      </h1>
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: `2vh`,
              border: "1px solid black",
              width: "200vh",
              height: "50vh",
              padding: `3vh`,
            }}
          >
            {isButtonVisible && (
              <label
                htmlFor="picture-input"
                style={{
                  cursor: `pointer`,
                  padding: `10px`,
                  backgroundColor: `#0ab1ba`,
                  color: `#fff`,
                }}
              >
                Choisissez une image
                <input
                  id="picture-input"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    setPictures(event.target.files[0]);
                    setIsButtonVisible(false);
                  }}
                />
              </label>
            )}
            {pictures && (
              <img
                style={{
                  height: `250px`,
                  marginBottom: `2vh`,
                  display: `flex`,
                  borderRadius: `5vh`,
                }}
                src={URL.createObjectURL(pictures)}
                alt=""
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: `flex`, gap: `20vh`, marginTop: `10vh` }}>
              <p>Titre</p>
              <input
                type="text"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="ex: Chemise H&M"
                value={title}
                style={{ marginBottom: `2vh` }}
              />
            </div>
            <div style={{ display: `flex`, gap: `11vh` }}>
              <p>Description</p>
              <textarea
                name=""
                id=""
                cols="40"
                rows="10"
                placeholder="ex: porté quelques fois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: `10vh`,
            }}
          >
            <div style={{ display: `flex`, gap: `16vh` }}>
              <p>Marque</p>
              <input
                type="text"
                placeholder="H&M"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              />
            </div>
            <div style={{ display: `flex`, gap: `19vh` }}>
              <p>Taille</p>
              <input
                type="text"
                placeholder="36,37,38"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              />
            </div>
            <div style={{ display: `flex`, gap: `16vh` }}>
              <p>Couleur</p>
              <input
                type="text"
                placeholder="noir"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              />
            </div>
            <div style={{ display: `flex`, gap: `21vh` }}>
              <p>État</p>
              <input
                type="text"
                placeholder="comme neuf"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              />
            </div>
            <div style={{ display: `flex`, gap: `20.5vh` }}>
              <p>Lieu</p>
              <input
                type="text"
                placeholder="Paris"
                value={place}
                onChange={(event) => {
                  setPlace(event.target.value);
                }}
                style={{ marginBottom: `2vh` }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: `10vh`,
            }}
          >
            <div style={{ display: `flex` }}>
              <div style={{ display: `flex`, gap: `21vh` }}>
                <p>Prix</p>
                <input
                  type="number"
                  placeholder="20"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  style={{ marginBottom: `2vh` }}
                />
              </div>
              <p style={{ marginLeft: `2vh` }}>€</p>
            </div>
          </div>
          <input
            type="submit"
            value="Publier mon offre"
            style={{
              marginTop: `10vh`,
              display: `flex`,
            }}
          />
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
