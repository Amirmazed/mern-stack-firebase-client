import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
<>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
       
        <Navbar.Brand href="#home">Travel-Tour</Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className="justify-content-end">
        <NavHashLink as={Link} to="/home#home">Home</NavHashLink>
        <NavHashLink as={Link} to="/home#services" className="mx-3">Services</NavHashLink>
        {/* <NavHashLink to="/home#experts" >Experts</NavHashLink> */}
        
        {/* <Nav.Link as={Link} to="/shipping">Book Services</Nav.Link>
        <Nav.Link as={Link} to="/order">Gift Cards</Nav.Link> */}
        {/* <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
        <Nav.Link as={Link} to="/addService">Add a service</Nav.Link>
        <Nav.Link as={Link} to="/dashboard">My Orders</Nav.Link>
        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> 
                             :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>

        </Navbar.Text>
        </Navbar.Collapse>

        
       
        </Container>
    </Navbar>

</>          
        </>
    );
};

export default Header;