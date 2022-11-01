import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export default getProducts;
