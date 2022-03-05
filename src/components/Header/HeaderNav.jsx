import React from 'react';
import classes from './HeaderNav.module.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';


const HeaderNav = ({dark}) => {
  return (
    <Navbar collapseOnSelect fixed='right' expand='md' className={classes.navbar}>
    <Container className={classes.navbarcontainer}>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' className={classes.navbartoggle}/>
    <Navbar.Collapse id='responsive-navbar-nav navbarcollapse'>
    <Nav>
        <Nav.Link href="/" ><span className={dark ? classes.navLinksDark : classes.navLinks}>Explore</span></Nav.Link>
        <Nav.Link href="/profile" ><span className={dark ? classes.navLinksDark : classes.navLinks}>My Items</span></Nav.Link>
        <Nav.Link href="/" ><span className={dark ? classes.navLinksDark : classes.navLinks}>Following</span></Nav.Link>
        <Button className={classes.buttonCreate}>Create</Button>
        <Button className="btn-secondary">Connect</Button>
        </Nav>
        </Navbar.Collapse>
        
        </Container>
    </Navbar>
  )
}

export default HeaderNav