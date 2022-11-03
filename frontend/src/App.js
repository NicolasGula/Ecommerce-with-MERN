//React Route
import { Routes, Route } from "react-router-dom";
//React Bootstrap
import { Container } from "react-bootstrap";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/Screens/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen";
import CartScreen from "./components/Screens/CartScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart">
              <Route path="" element={<CartScreen />} />
              <Route path=":id" element={<CartScreen />} />
              <Route />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
