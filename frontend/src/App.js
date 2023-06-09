import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          {/* <h1>ShopMax</h1> */}
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/products/:id" Component={ProductDetails} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/login?" Component={LoginScreen} />
            <Route path="/register?" Component={RegisterScreen} />
            <Route path="/profile?" Component={ProfileScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
