import React from "react";
import classes from './UserCard.module.css';
import { Card, Image } from "react-bootstrap";
import img from '../../images/user1.svg';

export const UserCard = (props) => {
  return (
    <Card className={classes.userCard}>
      <div className={classes.rank}>1</div>
      <div className={classes.userImageVer}>
        <Card.Img className={classes.userImage} variant="top" src={img} />
        <div className={classes.tick}></div>
      </div>
      <Card.Title className={classes.userCardTitle}>
        Miya Ayana
      </Card.Title>
      <Card.Text className={classes.userCardText}>
      <b>{props.price}5.250</b>ETH
      </Card.Text>
    </Card>
  );
}