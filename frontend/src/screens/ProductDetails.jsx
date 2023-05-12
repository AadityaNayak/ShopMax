import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import {listProductDetails} from "../actions/productActions"

const ProductDetails = ({ match }) => {
  const params = useParams();
  const [Product, setProduct] = useState({});

  async function fetchProductDetails() {
    let data = await fetch(`http://localhost:8080/api/products/${params.id}`);
    data = await data.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <Link to="/">
        <i className="fas fa-arrow-left"></i>
        &nbsp;Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={Product.image} alt={Product.name} fluid />
          {console.log(Product.image)}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{Product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={Product.rating} text={Product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>Price : ${Product.price}</ListGroupItem>
            <ListGroupItem>{Product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {Product.countInStock > 0 ? "In Stock " : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="brn-block" type="button">
              Add to Cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
