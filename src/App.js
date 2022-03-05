import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LastPage } from './container/LastPage';
import './App.css';
import {Modal1} from './Modal/Modal'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Button} from "react-bootstrap";
import {useState} from "react";

const Profile = () => {
  return <div>Profile</div>
}
const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div style={{height:"100vh"}}>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <Modal1 style={{ zIndex:"6"}} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
const Item = () => {
  return <div>Item</div>
}

function App() {

  const dark = true;

  return (
    <div className={dark ? "dark" : "light"}>
      <Header dark={dark}/>
      
      <Switch>
      <Route path="/" exact component={LastPage} />
        <Route path="/create" exact component={Home } />
        <Route path="/profile" exact component={Profile} />
        
        </Switch>
      <Footer dark={dark}/>
    </div>
  );
}

export default App;