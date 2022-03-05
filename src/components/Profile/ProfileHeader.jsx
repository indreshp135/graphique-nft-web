import React from 'react';
import cityImg from '../../images/citybg.png';
import classes from './ProfileHeader.module.css';
import user from '../../images/userImg1.png';

const ProfileHeader = () => {
  return (
    <div className={classes.profileHeader}>
    <div className={classes.bgHolder}><img src={cityImg} alt="" className={classes.profileBG}/></div>
        
        <img src={user} alt="" className={classes.profileImg}/>
    </div>
  )
}

export default ProfileHeader