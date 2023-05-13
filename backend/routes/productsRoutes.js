const express = require("express");
const products = require("../models/ProductModel");
const Product = require("../models/ProductModel");
const asynchandler = require("express-async-handler")
const{getProduct, getProducts} = require("../controllers/productsController")

const router = express.Router();

// To get all the products
router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct);

// To get a single product
router.get("/products/:id", asynchandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  }
  else{
    res.status(404).json({message: "Product Not Found"})
  }
}));

module.exports = router;
