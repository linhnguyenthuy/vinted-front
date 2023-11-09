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
          `https://lereacteur-vinted-api.herokuapp.com/offers/${id}`
        );
        // console.log(reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.reponse.data);
      }
      fetchData();
    };
  }, []);
  return isLoading ? (
    <h1>Is Loading...</h1>
  ) : (
    <div>
      <img src={data.product_image.secure_url} alt="" />
    </div>
  );
};
export default Offert;
