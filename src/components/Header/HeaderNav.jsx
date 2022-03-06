import React from "react";
import classes from "./HeaderNav.module.css";
import './HeaderNav.css'
import { Button, Navbar, Nav } from "react-bootstrap";

const HeaderNav = ({ dark }) => {
  return (
    <Navbar
      
      fixed="right"
      expand="xl"
      className={classes.navbar}
    >
      <div className={classes.navbarcontainer}>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={classes.navbartoggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav navbarcollapse">
          <Nav>
            <Nav.Link className="z1" href="/">
              <span className={classes.navLinks}>
                Explore
              </span>
            </Nav.Link>
            <Nav.Link className="z1" href="/profile">
              <span className={classes.navLinks}>
                My Items
              </span>
            </Nav.Link>
            <Nav.Link className="z1" href="/">
              <span className={classes.navLinks}>
                Following
              </span>
            </Nav.Link>
            <Button href="/create" className="z1 btn btn-primary px-3 me-1">Create</Button>
            <button className="z1 btn-btn px-3"><a href="#footer">Connect</a></button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderNav;
