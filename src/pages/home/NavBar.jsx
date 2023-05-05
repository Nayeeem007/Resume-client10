import React, { useContext, useState } from 'react';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Navbar.css';

const NavBar = () => {

const {user, logout}= useContext(AuthContext);

const handleLogout=()=>{
  logout()
  .then()
  .catch(error=>{
    console.log(error);
})
}
//hove=====
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {user.displayName}
  </Tooltip>
);
//=======


    return (
       <Container>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-success fw-bold fs-1'>Cooking Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            
            
          </Nav>
          {
            user ? <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img  className='rounded-circle p-img mx-3 hover-overlay' src={user ?.photoURL} alt="" />
          </OverlayTrigger> : 
            <img className='rounded-circle p-img mx-3' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
          }
          <NavLink className='pe-3 text-decoration-none fw-semibold' to="/">Home</NavLink>
            { user? <Button onClick={handleLogout} className='px-3 btn-success mx-3 text-decoration-none' to="/logout">Logout</Button>:
              <NavLink className='pe-3 text-decoration-none fw-semibold' to="/login">Login</NavLink>
            }
            <NavLink className='pe-3 text-decoration-none fw-semibold' to="/resister">Resister</NavLink>
            <NavLink className='text-decoration-none fw-semibold'  to="/blogs">Blogs</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Container>
    );
};

export default NavBar;