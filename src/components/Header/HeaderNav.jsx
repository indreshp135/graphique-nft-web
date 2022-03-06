import React from "react";
import classes from "./HeaderNav.module.css";
import "./HeaderNav.css";
import { Button, Navbar, Nav, Modal } from "react-bootstrap";

const HeaderNav = ({ dark }) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Navbar
        variant={dark ? "dark" : "light"}
        fixed="right"
        expand="xl"
        className={classes.navbar}
        expanded={false}
        onToggle={() => setShow(!show)}
      >
        <div className={classes.navbarcontainer}>
          <Navbar.Toggle className={classes.navbartoggle} />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link className="z1" href="/">
                <span className={classes.navLinks}>Explore</span>
              </Nav.Link>
              <Nav.Link className="z1" href="/profile">
                <span className={classes.navLinks}>My Items</span>
              </Nav.Link>
              <Nav.Link className="z1" href="/">
                <span className={classes.navLinks}>Following</span>
              </Nav.Link>
              <Button href="/create" className="btn btn-primary px-3 me-1">
                Create
              </Button>
              <button className="btn-btn px-3">
                <a href="#footer">Connect</a>
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Modal dark show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className={dark?classes.dark_modal:""} id="frg">
          <Modal.Title>
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4024 11.218V5.746H10.9304V8.14H13.7204V9.94C13.0124 10.444 12.1424 10.696 11.1104 10.696C10.5464 10.696 10.0304 10.6 9.56238 10.408C9.10638 10.204 8.70438 9.922 8.35638 9.562C8.02038 9.202 7.75638 8.782 7.56438 8.302C7.38438 7.81 7.29438 7.276 7.29438 6.7V6.664C7.29438 6.124 7.38438 5.62 7.56438 5.152C7.75638 4.672 8.01438 4.258 8.33838 3.91C8.67438 3.55 9.05838 3.268 9.49038 3.064C9.93438 2.848 10.4084 2.74 10.9124 2.74C11.2724 2.74 11.6024 2.77 11.9024 2.83C12.2024 2.89 12.4784 2.974 12.7304 3.082C12.9944 3.19 13.2464 3.322 13.4864 3.478C13.7264 3.634 13.9664 3.814 14.2064 4.018L15.9524 1.912C15.6284 1.636 15.2924 1.39 14.9444 1.174C14.5964 0.958 14.2244 0.778 13.8284 0.633999C13.4324 0.489999 13.0004 0.381999 12.5324 0.309999C12.0764 0.226 11.5664 0.184 11.0024 0.184C10.0424 0.184 9.16038 0.358 8.35638 0.705999C7.55238 1.042 6.85638 1.51 6.26838 2.11C5.68038 2.698 5.21838 3.388 4.88238 4.18C4.55838 4.96 4.39638 5.8 4.39638 6.7V6.736C4.39638 7.672 4.55838 8.536 4.88238 9.328C5.20638 10.12 5.65638 10.804 6.23238 11.38C6.82038 11.956 7.51638 12.406 8.32038 12.73C9.13638 13.054 10.0364 13.216 11.0204 13.216C12.1724 13.216 13.1924 13.024 14.0804 12.64C14.9804 12.244 15.7544 11.77 16.4024 11.218ZM7.08637 23V16H5.56637V20.31L2.28637 16H0.866367V23H2.38637V18.55L5.77637 23H7.08637ZM14.0968 17.4V16H8.76676V23H10.3068V20.29H13.6468V18.89H10.3068V17.4H14.0968ZM20.6293 17.42V16H14.8293V17.42H16.9593V23H18.4993V17.42H20.6293Z"
                fill="#DA18A3"
              />
            </svg>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={dark?classes.dark_modal:""}>
          <Nav.Link className="z1" href="/">
            <span className={classes.navLinks}>Explore</span>
          </Nav.Link>
          <Nav.Link className="z1" href="/profile">
            <span className={classes.navLinks}>My Items</span>
          </Nav.Link>
          <Nav.Link className="z1" href="/">
            <span className={classes.navLinks}>Following</span>
          </Nav.Link>
        </Modal.Body>
        <Modal.Footer className={dark?classes.dark_modal:""} style={{justifyContent:"space-evenly"}}>
          <Button href="/create" className="btn btn-primary rtn p-3 me-1">
            Create
          </Button>
          <button className="btn-btn rtn p-3">
            <a href="#footer">Connect</a>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeaderNav;
