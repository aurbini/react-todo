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
import { useSelector, useDispatch } from 'react-redux'
import Logout from './Logout'



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.user.isAuthenticated)

  const renderAuthLinks = () => 
    <NavItem>
      <Logout />
    </NavItem> 
  
  const renderGuestLinks = () => 
    <NavItem>
      <NavLink href="/login">Login</NavLink>
    </NavItem> 


  return (
    <div>
      <Navbar color="dark" dark className="mb-5 text-primary" expand="md">
        <Container> 
          <NavbarBrand  href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isLoggedIn ? 
                renderAuthLinks() : 
                renderGuestLinks()
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;