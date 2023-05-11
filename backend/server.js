const express = require("express");
const products = require("./data/products");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDb = require("./config/config")
dotenv.config();

// Connecting to MongoDB
connectDb()
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
});
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = 8000;

// The application will run on the port number form .env file or the above port
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`);
});
