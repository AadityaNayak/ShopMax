import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <Router>
        <Header />
        <main>
          <Container>
            <h1>ShopMax</h1>
      <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/products/:id" Component={ProductDetails} />
      </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
