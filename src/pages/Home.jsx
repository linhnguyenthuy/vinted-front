import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error());
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <h1>Is Loading...</h1>
  ) : (
    <div>
      <div
        style={{
          display: `flex`,
          justifyContent: "center",
          marginBottom: `20px`,
          marginTop: `20px`,
        }}
      >
        <img
          src="https://cdn.tech.eu/uploads/2021/08/vinted-1.jpg"
          alt=""
          style={{
            width: `100%`,
            height: `480px`,
            objectFit: `cover`,
            objectPosition: `center`,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 5%",
        }}
      >
        <div style={{ display: `flex`, flexWrap: `wrap` }}>
          {data.offers.map((offers, index) => {
            // console.log(offers.owner.account.avatar.secure_url);
            // console.log(offers.owner.account.username);

            return (
              <Link
                to={`/offers/${offers._id}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    marginTop: `20px`,
                    marginLeft: `10px`,
                    marginBottom: `30px`,
                    marginRight: `2px`,
                  }}
                >
                  {offers.owner &&
                  offers.owner.account &&
                  offers.owner.account.avatar &&
                  offers.owner.account.avatar.secure_url ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: `10px`,
                      }}
                    >
                      <img
                        src={offers.owner.account.avatar.secure_url}
                        alt=""
                        style={{
                          height: `50px`,
                          width: `50px`,
                          borderRadius: `50%`,
                          marginRight: `5px`,
                        }}
                      />
                      <span style={{ color: `#b4b4b4`, fontSize: "85%" }}>
                        {offers.owner.account.username}
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
                      <span style={{ color: `#b4b4b4`, fontSize: "85%" }}>
                        {offers.owner.account.username}
                      </span>
                    </div>
                  )}

                  <div>
                    <img
                      src={offers.product_image.secure_url}
                      alt=""
                      style={{
                        height: `360px`,
                        width: `230px`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        objectFit: `cover`,
                        objectPosition: `center`,
                        borderRadius: `10px`,
                      }}
                    />
                  </div>
                  <p style={{ color: `black` }}>{offers.product_price} €</p>
                  <p style={{ color: `#b4b4b4`, fontSize: "85%" }}>
                    {offers.product_details[1].TAILLE}
                  </p>
                  <p style={{ color: `#b4b4b4`, fontSize: "85%" }}>
                    {offers.product_details[0].MARQUE}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
