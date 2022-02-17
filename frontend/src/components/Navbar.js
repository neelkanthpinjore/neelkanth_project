import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown,FormControl,Button,Form } from 'react-bootstrap'

const NavBar=()=>{
       return (
           <>
               <Navbar bg="light" style={{ backgroundColor:'white'}}>
    <Container>
    <LinkContainer to='/'>
    <Navbar.Brand >Neelkanth</Navbar.Brand>
    </LinkContainer>
    <Nav className="me-auto">
    <NavDropdown
          id="nav-dropdown-dark-example"
          title="View Products"
          menuVariant="dark"
        >  
  
          <NavDropdown.Item href="/products/sherwani">Sherwani</NavDropdown.Item>       
          <NavDropdown.Item href="/products/lehnga">Lehnga</NavDropdown.Item>
          <NavDropdown.Item href="/products/jewellery">Jewellery</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/products/accessories">Marriage Accesories</NavDropdown.Item>
        </NavDropdown>

        <LinkContainer to='/contact'>
      <Nav.Link>Contact Us</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
           </>
       )
}

export default NavBar