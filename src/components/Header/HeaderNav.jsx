import React from "react";
import classes from "./HeaderNav.module.css";
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
            <Nav.Link href="/">
              <span className={dark ? classes.navLinksDark : classes.navLinks}>
                Explore
              </span>
            </Nav.Link>
            <Nav.Link href="/profile">
              <span className={dark ? classes.navLinksDark : classes.navLinks}>
                My Items
              </span>
            </Nav.Link>
            <Nav.Link href="/">
              <span className={dark ? classes.navLinksDark : classes.navLinks}>
                Following
              </span>
            </Nav.Link>
            <Button className="btn btn-primary px-3 me-1">Create</Button>
            <button className="btn-btn px-3">Connect</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderNav;
