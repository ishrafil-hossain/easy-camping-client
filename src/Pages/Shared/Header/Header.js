import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">Easy Camping</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#price-list">Price List</Nav.Link>
                        <Nav.Link as={Link} to="/my-booking">My Booking</Nav.Link>


                        {user?.email ?
                            <div className="d-flex">
                                <Nav.Link as={Link} to="/add-offer">Add Offer</Nav.Link>
                                <Nav.Link as={Link} to="/manage-booking">Manage Booking</Nav.Link>
                                <Button onClick={logOut} variant="success">Logout</Button>
                            </div>

                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as :   <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;