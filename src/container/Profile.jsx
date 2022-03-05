import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { Deck } from "../components/Deck/Deck";
import { Container, Dropdown } from "react-bootstrap";
import SearchBar from "../components/Header/SearchBar";

export const Profile = ({ dark }) => {
  return (
    <>
      <ProfileHeader />
      <Container className="mt-5">
        <div className="d-flex flex-row justify-content-center">
          <SearchBar dark={dark} />
          <Dropdown className="ml-auto">
            <Dropdown.Toggle
              variant="outline-light"
              id="dropdown-basic"
              className={dark ? "dropdown-toggle-dark" : "dropdown-toggle"}
            >
              Recently Listed
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h4 className="h3 mt-4 topic">Hot Bids</h4>
        <div className="flow">
          <Deck />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-btn load-more-btn">Load More</button>
        </div>
      </Container>
    </>
  );
};
