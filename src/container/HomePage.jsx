import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import classes from "./HomePage.module.css";
import banner from "../images/homeBanner.svg";
import circle2 from "../images/circle2.svg";
import Carousel from "react-elastic-carousel";
import { Deck } from "../components/Deck/Deck";

export const HomePage = () => {
  // var userCards = [
  //   {
  //     photo: user1,
  //     name: "Mia Ayana",
  //     worth: "5.250",
  //     rank: 1,
  //   },
  //   {
  //     photo: user1,
  //     name: "Mia Ayana",
  //     worth: "5.250",
  //     rank: 2,
  //   },
  // ]

  return (
    <Container
      className={`mt-5 ${classes.homePage}`}
    >
      <Row className={classes.bannerContainer}>
        <div className={`d-flex align-items-center ${classes.homeBanner}`}>
          <p className={`mx-5 ${classes.bannerText}`}>
            Discover, Collect and sell extraordinary NFTs
          </p>
          <Image className={classes.circle2} src={circle2} />
          <Image className={classes.bannerCircle} src={banner} />
        </div>
      </Row>
      <div className={classes.deck}><Deck /></div>
      
    </Container>
  );
};
