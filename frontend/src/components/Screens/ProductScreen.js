import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Rating from "../Rating/Rating";
import getProductById from "../../services/getProductById";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Volver
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Precio: U$S {product.price}</ListGroup.Item>
            <ListGroup.Item>Descripcion: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>U$S {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {product.countInStock > 0 ? "En stock" : "Sin stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Agregar al carro
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
