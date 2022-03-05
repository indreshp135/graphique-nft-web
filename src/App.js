import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LastPage } from './container/LastPage';
import './App.css';
import { PhotoCard } from './components/Cards/PhotoCard';
import { UserCard } from './components/Cards/UserCard';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Button} from "react-bootstrap";
import {useState} from "react";

import img from './images/abc.png';

const Profile = () => {
  return <div>Profile</div>
}
const Home = () => {
  return <div>Home</div>
}

const Item = () => {
  return <div>Item</div>
}

var cards = [
  {
    photo: img,
    name: "Name1",
    price: "0.1",
    like: true,
    likes: "100"
  },
  // {
  //   photo: img,
  //   name: "Name2",
  //   price: "0.2",
  //   like: false,
  //   likes: "200"
  // },
  // {
  //   photo: img,
  //   name: "Name3",
  //   price: "0.3",
  //   like: true,
  //   likes: "300"
  // },
]

function App() {

  const dark = true;

  return (
    <div className={dark ? "dark" : "light"}>
      {/* <Header dark={dark}/> */}
      
      <Switch>
      <Route path="/" exact component={LastPage} />
        <Route path="/create" exact component={Home } />
        <Route path="/profile" exact component={Profile} />
        
        </Switch>
      {/* <Footer dark={dark}/> */}
      {cards.map(card => {
        return (
          <PhotoCard {...card}/>
        )
      })}
      {/* <br /> */}
      <UserCard/>
    </div>
  );
}

export default App;