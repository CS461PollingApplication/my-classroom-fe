import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './components.css'
import useAuth from '../../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

//NavBar for the whole website.
function TopNavbar(props) {
    const [ loggedIn, message, error, loading ] = useAuth()

    return (
        <div>
            <Navbar className='navbarMain' expand="lg">
                <div className='navbarLeftContainer'>
                    <Navbar.Brand className='navbarItem main'><NavLink className='navbarItem' to='/home'>{process.env.REACT_APP_NAME}</NavLink></Navbar.Brand>
                    { loggedIn && <NavLink className='navbarItem' to='/'>Home Page</NavLink> }
                </div>
                <div className="navbarRightContainer">
                    <div className="dropdown">
                        <div className="dropdownIcon"><FontAwesomeIcon icon={faUser} /></div>
                        <UserMenu loggedIn={loggedIn}/>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

function UserMenu(props) {
    return <>{ 
        props.loggedIn === true ? 
                        <div className="dropdownMenu">
                            <NavLink className='dropdownLink' to='/profile'>Profile</NavLink>
                            <NavLink className='dropdownLink' to='/login'>Logout</NavLink> {/* TODO: attach logout functionality (i.e. API request trigger)*/}
                        </div>
                        : <div className="dropdownMenu">
                            <NavLink className='dropdownLink' to='/create'>Create Account</NavLink>
                            <NavLink className='dropdownLink' to='/login'>Login</NavLink>
                        </div>
    }</>
}

export default TopNavbar;