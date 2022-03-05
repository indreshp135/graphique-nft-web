import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LastPage } from './container/LastPage';
import { HomePage } from './container/HomePage';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import img from './images/abc.png';
// import user1 from './images/user1.svg';

const Profile = () => {
  return <div>Profile</div>
}

const Item = () => {
  return <div>Item</div>
}

// var imageCards = [
//   {
//     photo: img,
//     name: "Name1",
//     price: "0.1",
//     like: true,
//     likes: "100"
//   },
//   {
//     photo: img,
//     name: "Name2",
//     price: "0.2",
//     like: false,
//     likes: "200"
//   },
//   {
//     photo: img,
//     name: "Name3",
//     price: "0.3",
//     like: true,
//     likes: "300"
//   },
// ]

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

function App() {

  const dark = false;

  return (
    <div className={dark ? "dark" : "light"}>
      <Header dark={dark}/>
      
      <Switch>
      <Route path="/" exact component={HomePage} />
        <Route path="/create" exact component={LastPage } />
        <Route path="/profile" exact component={Profile} />
        <Route path="/item" exact component={Item} />
        
        </Switch>
      <Footer dark={dark}/>
    </div>
  );
}

export default App;