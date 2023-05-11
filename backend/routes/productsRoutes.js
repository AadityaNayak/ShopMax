const express = require("express");
const products = require("../models/ProductModel");
const Product = require("../models/ProductModel");

const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  }
  else{
    res.status(404).json({message: "Product Not Found"})
  }
});

module.exports = router;
