import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import classes from "./HomePage.module.css";
import banner from "../images/homeBanner.svg";
import circle2 from "../images/circle2.svg";
import Carousel from "react-elastic-carousel";
import user1 from "../girl.png";
import user2 from "../girl.png";
import user3 from "../girl.png";
import user4 from "../girl.png";
import user5 from "../girl.png";
import { UserCard } from "../components/Cards/UserCard";
import { Deck } from "../components/Deck/Deck";
import "./homepage.css";

export const HomePage = props => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  });
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
        {isMobile ? (
          <div className={classes.mobileCarousel}>
            {userCards.map(userCard => (
              <UserCard {...userCard} dark={props.dark} />
            ))}
          </div>
        ) : (
          <Carousel itemsToShow={4} itemsToScroll={4}>
            {userCards.map(userCard => (
              <UserCard {...userCard} dark={props.dark} />
            ))}
          </Carousel>
        )}
      </Row>
      <div className={classes.deck}>
        <Deck />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-btn load-more-btn">Load More</button>
      </div>
    </Container>
  );
};
