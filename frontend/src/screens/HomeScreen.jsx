import React, { useEffect, useState } from "react";
import Products from "../products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {

  const [Products, setProducts] = useState([]);

  async function fetchProducts(){
    let data = await fetch("http://localhost:8080/api/products");
    data = await data.json();
    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

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
