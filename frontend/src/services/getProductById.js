import axios from "axios";

const getProducts = async (id) => {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
};

export default getProducts;
