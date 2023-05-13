const express = require("express");
const products = require("../models/ProductModel");
const Product = require("../models/ProductModel");
const asynchandler = require("express-async-handler")
const{getProduct, getProducts} = require("../controllers/productsController")

const router = express.Router();


router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct);


module.exports = router;
