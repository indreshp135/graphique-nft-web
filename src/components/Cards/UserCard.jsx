import React from "react";
import classes from './UserCard.module.css';
import { Card, Image } from "react-bootstrap";
import img from '../../images/user1.svg';
import verifiedBlack from '../../images/tick.svg';
import verifiedWhite from '../../images/tickwhite.svg';

export const UserCard = (props) => {
  return (
    <Card className={classes.userCard}>
      <div className={classes.rank}>{props.rank}</div>
      <div className={classes.userImageVer}>
        <Card.Img className={classes.userImage} variant="top" src={props.photo} />
        <div className={classes.tick}>
          {props.dark ? <Image src={verifiedWhite}/> : <Image src={verifiedBlack}/>}
        </div>
      </div>
      <Card.Title className={classes.userCardTitle}>
        {props.name}
      </Card.Title>
      <Card.Text className={classes.userCardText}>
      <b>{props.worth}</b>ETH
      </Card.Text>
    </Card>
  );
}