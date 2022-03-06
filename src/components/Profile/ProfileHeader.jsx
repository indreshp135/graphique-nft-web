import React from "react";
import cityImg from "../../images/minbg.jpg";
import classes from "./ProfileHeader.module.css";
import user from "../../images/userImg1.jpg";

const ProfileHeader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className={classes.profileHeader}>
        <div className={classes.bgHolder}>
          <img src={cityImg} alt="" className={classes.profileBG} />
        </div>

        <img src={user} alt="" className={classes.profileImg} />
      </div>
      <div className={classes.mia}>Mia Ayana</div>
    </div>
  );
};

export default ProfileHeader;
