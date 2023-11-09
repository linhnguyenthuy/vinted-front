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
      {data.offers.map((offers, index) => {
        // console.log(offers.owner.account.avatar.secure_url);
        // console.log(offers.owner.account.username);

        return (
          <Link to={`/offers/${offers._id}`} key={index}>
            <div>
              {offers.owner &&
              offers.owner.account &&
              offers.owner.account.avatar &&
              offers.owner.account.avatar.secure_url ? (
                <img
                  src={offers.owner.account.avatar.secure_url}
                  alt=""
                  style={{ height: `50px`, width: `50px` }}
                />
              ) : null}
              <span>{offers.owner.account.username}</span>
              <div>
                <img
                  src={offers.product_image.secure_url}
                  alt=""
                  style={{
                    height: `360px`,
                    width: `230px`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <p>{offers.product_price} €</p>
              <p>{offers.product_details[1].TAILLE}</p>
              <p>{offers.product_details[0].MARQUE}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Home;
