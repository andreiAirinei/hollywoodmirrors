import React, { useState } from 'react';
import Styled from './CustomNavbar.styles';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => {
  return (
    <Styled>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#'>HOLLYWOOD MIRRORS</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='HOLLYWOOD MIRRORS'>
                <NavDropdown.Item href='#'>TABLE TOP</NavDropdown.Item>
                <NavDropdown.Item href='#'>WALL MOUNTED</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#link'>BATHROOM</Nav.Link>
              <Nav.Link href='#link'>MAKEUP DESKS</Nav.Link>
              <Nav.Link href='#link'>LIGHT BULBS</Nav.Link>
              <div className='cart-icon'>
                <img src={require('../assets/shopping-cart.png')} />
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
