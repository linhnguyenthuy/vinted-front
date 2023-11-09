import { useEffect, useState } from "react";
import axios from "axios";

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
        console.log(offers.owner.account.avatar.url);
        return (
          <div key={index}>
            <img src={offers.owner.account.avatar.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Home;
