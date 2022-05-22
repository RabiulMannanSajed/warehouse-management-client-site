import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Image/spices1.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' className='navbar-color' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={70} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#product">Inventory</Nav.Link>
                        <Nav.Link href="/allProducts">All Products</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to='addproduct'>Add Product</Nav.Link>
                                <Nav.Link as={Link} to='deleteproduct'>Delete Product</Nav.Link>
                                <Nav.Link as={Link} to='myproducts'>My Items</Nav.Link>
                            </>
                        }
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>

                        {
                            user ?
                                <button className='btn btn-white text-decoration-none' onClick={handleSignOut}> Sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;