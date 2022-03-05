import React from 'react';
import classes from './HeaderNav.module.css';
import { NavLink } from 'react-router-dom';


const HeaderNav = () => {
  return (
    <div className={classes.headerNav}>
        <NavLink to="/" >Explore</NavLink>
        <NavLink to="/profile" >My Items</NavLink>
        <NavLink to="/" >Following</NavLink>
    </div>
  )
}

export default HeaderNav