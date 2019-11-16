import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Styled, { CustomLink } from "./CustomNavbar.styles";

// import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {
  return (
    <Styled>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">HOLLYWOOD MIRRORS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="HOLLYWOOD MIRRORS">
                <LinkContainer to="/shop/all">
                  <NavDropdown.Item>VIEW ALL MIRRORS</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/tabletop">
                  <NavDropdown.Item>TABLE TOP</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/wall-mounted">
                  <NavDropdown.Item>WALL MOUNTED</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <CustomLink to="/shop/bathroom-mirrors">BATHROOM</CustomLink>
              <CustomLink to="/shop/makeup-desks">MAKEUP DESKS</CustomLink>
              <CustomLink to="/shop/lightbulbs">LIGHT BULBS</CustomLink>
              <div className="cart-icon">
                <img
                  src={require("../assets/shopping-cart.png")}
                  alt="Shopping Cart Icon"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
          {/* <Nav.Link href='#link' className='cart-icon'>
            <img src={require('../assets/shopping-cart.png')} />
          </Nav.Link> */}
        </Container>
      </Navbar>
    </Styled>
  );
};

export default CustomNavbar;
