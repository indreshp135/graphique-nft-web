import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import classes from "./HomePage.module.css";
import banner from "../images/homeBanner.svg";
import circle2 from "../images/circle2.svg";
import Carousel from "react-elastic-carousel";
import user1 from "../images/users/user1.svg";
import user2 from "../images/users/user2.svg";
import user3 from "../images/users/user3.svg";
import user4 from "../images/users/user4.svg";
import user5 from "../images/users/user5.svg";
import { UserCard } from "../components/Cards/UserCard";
import { Deck } from "../components/Deck/Deck";
import { propTypes } from "react-bootstrap/esm/Image";

export const HomePage = props => {
  var userCards = [
    {
      photo: user1,
      name: "Mia Ayana",
      worth: "5.250",
      rank: 1,
    },
    {
      photo: user2,
      name: "Rian Leon",
      worth: "4.932",
      rank: 2,
    },
    {
      photo: user3,
      name: "Lady Young",
      worth: "4.620",
      rank: 3,
    },
    {
      photo: user4,
      name: "Black Glass",
      worth: "4.125",
      rank: 4,
    },
    {
      photo: user5,
      name: "Budhiman",
      worth: "3.921",
      rank: 5,
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 5 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Container className={`mt-5 ${classes.homePage}`}>
      <Row className={classes.bannerContainer}>
        <div className={`d-flex align-items-center ${classes.homeBanner}`}>
          <p className={`mx-5 ${classes.bannerText}`}>
            Discover, Collect and sell extraordinary NFTs
          </p>
          <Image className={classes.circle2} src={circle2} />
          <Image className={classes.bannerCircle} src={banner} />
        </div>
      </Row>
      <Row>
        <Carousel breakPoints={{ breakPoints }}>
          {userCards.map(userCard => (
            <UserCard {...userCard} dark={props.dark} />
          ))}
        </Carousel>
      </Row>
      <div className={classes.deck}>
        <Deck />
      </div>
    </Container>
  );
};
