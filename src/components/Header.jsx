import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import useCartData from "../context/cartContext";
import useAuthData from "../context/authContext";

function Header() {
  const { cart } = useCartData();
  const { isLoggedIn } = useAuthData();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
      <Container fluid>
        <Link to="">
          <Navbar.Brand href="">Smiggy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="history">
              Order History
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={Link} to="setPrice">
                Set Price
              </Nav.Link>
            )}
          </Nav>
          <Nav.Link as={Link} to="cart">
            <span className="cart-count-details">
              Cart{" "}
              <span className="cart-count">
                {cart.length > 0 && cart.length}
              </span>
            </span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
