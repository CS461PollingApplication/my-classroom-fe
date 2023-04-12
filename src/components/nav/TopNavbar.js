import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './components.css'
import useAuth from '../../hooks/useAuth'

//NavBar for the whole website.
function TopNavbar(props) {
    const loggedIn = useAuth()

    return (
        <div>
            <Navbar className='navbarMain' expand="lg">
                <Container>
                    <Navbar.Brand className='navbarItem main'><NavLink  className='navbarItem' to='/home'>{process.env.REACT_APP_NAME}</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    { loggedIn && <Nav className="navbar navbar-dark">
                        <NavLink className='navbarItem' to='/'>Home Page</NavLink>
                        <NavLink className='navbarItem' to='/profile'>Profile</NavLink>
                        <NavLink className='navbarItem' to='/login'>Logout</NavLink> {/* TODO: attach logout functionality (i.e. API request trigger)*/}
                    </Nav> }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNavbar;