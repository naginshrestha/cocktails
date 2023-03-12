import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar className='bg-light p-3'>
      <Container>
        <Navbar.Brand href="#home">ThecocktailsDB</Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className='justify-content-end'>
        <Nav>

            <Link to="/" className="nav-link ">Home</Link>
            <Link to="/about" className="nav-link">About</Link>



        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
