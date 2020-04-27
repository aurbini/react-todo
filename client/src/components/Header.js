import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark className="mb-5 text-primary" expand="md">
        <Container> 
          <NavbarBrand  href="/">To-dos</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;