import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="py-2"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo-ecommerce" />
              <span className="ml-4">Tu Ecommerce</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>🛒 Mi Carrito</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>👤 Iniciar Sesion</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
