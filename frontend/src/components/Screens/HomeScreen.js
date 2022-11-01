import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//React Components
import Product from "../Product/Product";
//React Bootstrap
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../../actions/productActions.js";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center">Ultimos productos</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
