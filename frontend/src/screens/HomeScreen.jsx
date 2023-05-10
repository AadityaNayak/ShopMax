import React from "react";
import Products from "../products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {Products.map((product) => {
          return (
            <Col md="3" key = {product._id}>
              <ProductScreen product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
