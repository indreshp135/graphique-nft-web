import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LastPage } from './container/LastPage';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Profile = () => {
  return <div>Profile</div>
}
const Home = () => {
  return <div>Home</div>
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