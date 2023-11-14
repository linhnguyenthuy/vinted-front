import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offert = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.reponse.data);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Fonction de nettoyage pour supprimer l'écouteur d'événements lors de la désinstallation du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isLoading ? (
    <h1>Is Loading...</h1>
  ) : (
    <div
      style={{
        backgroundColor: isMobile ? "white" : `#FAF9F6`,
        marginTop: `20px`,
        paddingTop: `10px`,
        paddingBottom: `10px`,
      }}
    >
      <div
        style={{
          display: isMobile ? "block" : "flex",
          gap: `10%`,
          marginTop: `3vh`,

          justifyContent: "center",
        }}
      >
        {data && data.product_image && (
          <img
            src={data.product_image.secure_url}
            alt=""
            style={{
              width: `450px`,
              height: `600 px`,
              objectFit: `cover`,
              objectPosition: `center`,
            }}
          />
        )}
        <div
          style={{
            width: `400px`,
            backgroundColor: `white`,
            padding: `50px`,
            fontFamily: `revert`,
          }}
        >
          <p style={{ fontSize: `25px`, marginBottom: `50px` }}>
            {data.product_price} €
          </p>

          <div style={{ marginBottom: `50px` }}>
            {data.product_details[0] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  MARQUE:
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[0].MARQUE}
                </p>
              </div>
            ) : null}
            {data.product_details[1] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  TAILLE:
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[1].TAILLE}
                </p>
              </div>
            ) : null}
            {data.product_details[2] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  ÉTAT:
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[2].ÉTAT}
                </p>
              </div>
            ) : null}
            {data.product_details[3] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  COULEUR:
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[3].COULEUR}
                </p>
              </div>
            ) : null}
            {data.product_details[4] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  EMPLACEMENT
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[4].EMPLACEMENT}
                </p>
              </div>
            ) : null}
            {data.product_details[5] ? (
              <div
                style={{
                  display: `flex`,
                  textAlign: `left`,
                  marginBottom: `10px`,
                }}
              >
                <p
                  style={{
                    color: `#b4b4b4`,
                    marginRight: `10px`,
                    textAlign: `left`,
                  }}
                >
                  MODES DE PAIEMENT:
                </p>
                <p style={{ textAlign: `left` }}>
                  {data.product_details[5]["MODES DE PAIEMENT"]}
                </p>
              </div>
            ) : null}
          </div>
          <div style={{ marginBottom: `50px` }}>
            <p style={{ fontWeight: `bold`, marginBottom: `10px` }}>
              {data.product_name}
            </p>
            <p style={{ marginBottom: `30px` }}>{data.product_description}</p>
            {data.owner &&
            data.owner.account &&
            data.owner.account.avatar &&
            data.owner.account.avatar.secure_url ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: `10px`,
                }}
              >
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt=""
                  style={{
                    height: `50px`,
                    width: `50px`,
                    borderRadius: `50%`,
                    marginRight: `5px`,
                  }}
                />
                <span style={{ color: `#b4b4b4`, fontSize: "85%" }}>
                  {data.owner.account.username}
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: `9px`,
                }}
              >
                <div
                  style={{
                    height: `50px`,
                    width: `50px`,
                    border: `1px solid black`,
                    backgroundColor: `white`,
                    borderRadius: `50%`,
                    marginRight: `5px`,
                  }}
                />
                <span>{data.owner.account.username}</span>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "4vh",
            }}
          >
            <button
              style={{
                backgroundColor: `lightblue`,
                width: `300px`,
                height: `40px`,
                borderRadius: `10px`,
                display: `flex`,
                justifyContent: "center",
                alignItems: `center`,
              }}
            >
              ACHETER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offert;
