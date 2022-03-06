import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import classes from './PhotoCard.module.css';
import heart from '../../images/heart.svg';
import heartFilled from '../../images/heartfilled.svg';

export const PhotoCard = (props) => {
  return (
    <Card className={props.clickable ? classes.photoCard : `${classes.clickable} ${classes.photoCard}`}>
      <Card.Img className={classes.cardImage} variant="top" src={props.photo} />
      <Card.Body className={classes.cardBody}>
        <Container fluid style={{padding : 0}}>
        <Row className={classes.cardBodyTitle}>
        {props.name}
        </Row>
        <Row className={classes.cardBodyDesc}>
          <Col style={{padding: 0}}>
          <b>{props.price}</b> ETH
          </Col>
          <Col className={classes.cardBodyLikes}>
            <span style={{padding: 2}}>
            {props.like ? <Image src={heartFilled}/> : <Image src={heart}/>}
            </span>
            {' '}
            <span className={classes.cardBodyLikes}>{props.likes}</span>
          </Col>
        </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}