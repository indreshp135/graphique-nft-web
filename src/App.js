import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LastPage } from './container/LastPage';
import './App.css';
import Home from './Modal/Modal'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Profile = () => {
  return <div>Profile</div>
}
const Item = () => {
  return <div>Item</div>
}

function App() {
  return (
    <div className='light'>
      <Header />
      
      <Switch>
      <Route path="/" exact component={LastPage} />
        <Route path="/create" exact component={<Home />} />
        <Route path="/profile" exact component={<Profile />} />
        <Route path="/item" exact component={<Item />} />
        
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
