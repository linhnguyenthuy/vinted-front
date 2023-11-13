import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offert = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.reponse.data);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <h1>Is Loading...</h1>
  ) : (
    <div>
      {data && data.product_image && (
        <img src={data.product_image.secure_url} alt="" />
      )}
      <div>
        <h1>{data.product_price} €</h1>
      </div>
    </div>
  );
};
export default Offert;
