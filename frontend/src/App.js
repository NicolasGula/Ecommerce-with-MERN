import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <h1 className="text-center">Bienvenido A Tu Ecommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
