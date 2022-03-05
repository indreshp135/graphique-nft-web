import React from 'react';
import classes from './HeaderNav.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const HeaderNav = () => {
  return (
    <div className={classes.headerNav}>
        <NavLink to="/" >Explore</NavLink>
        <NavLink to="/profile" >My Items</NavLink>
        <NavLink to="/" >Following</NavLink>
        <Button>Create</Button>
    </div>
  )
}

export default HeaderNav