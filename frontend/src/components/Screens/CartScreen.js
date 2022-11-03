import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message/Message";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../../actions/cartActions";

const CartScreen = () => {
  const productId = useParams();

  const [userParams] = useSearchParams();
  const quantity = userParams.get("quantity");

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId.id, quantity));
    }
  }, [dispatch, productId, quantity]);

  return <div>Cart</div>;
};

export default CartScreen;
