const express = require("express");
const products = require("./data/products");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDb = require("./config/config")
const productRoutes = require("./routes/productsRoutes")
const userRoutes = require("./routes/UsersRoutes")
const {errorHandler} = require("./middlewares/errorMiddleware")

dotenv.config();

// Connecting to MongoDB
connectDb()
const app = express();

// Handling cors error
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
});

// products routes
app.use('/api', productRoutes);
app.use('/api/users', userRoutes);

// error handler middleware
app.use(errorHandler);

const PORT = 8000;

// The application will run on the port number form .env file or the above port
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`);
});
