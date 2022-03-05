import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LastPage } from "./container/LastPage";
import { HomePage } from "./container/HomePage";
import { Profile } from "./container/Profile";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ItemPage } from "./ItemPage/ItemPage";

// import img from './images/abc.png';
// import user1 from './images/user1.svg';

function App() {
  const dark = true;

  return (
    <div className={dark ? "dark" : "light"}>
      <Header dark={dark} />

      <Switch>
      <Route path="/" exact render={()=><HomePage dark={dark}/>}/>
        {/* <Route path="/create" exact component={Home } /> */}
        <Route path="/profile" exact render={()=><Profile dark={dark}/>} />
        <Route path="/item" exact render={()=><ItemPage dark={dark} />}/>
      </Switch>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
