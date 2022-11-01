import { useState, useEffect } from "react";
import getProducts from "../../services/getProducts";
//React Components
import Product from "../Product/Product";
//React Bootstrap
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-center">Ultimos productos</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
