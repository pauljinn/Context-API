import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container">
      <h1 className="text-center text-muted display-1">
        <b>React</b> Context API
      </h1>
      <Navbar color="light" light expand="lg">
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="flex-grow-1 justify-content-evenly" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">Cart</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
