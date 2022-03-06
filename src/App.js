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

function App() {
  // localStorage.setItem("dark", false);
  const [dark , setDark] = React.useState(localStorage.getItem("dark"));
  // setDark(false);
  return (
    <div className={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark} />

      <Switch>
      <Route path="/" exact render={()=><HomePage dark={dark}/>}/>
        <Route path="/create" exact component={LastPage} />
        <Route path="/profile" exact render={()=><Profile dark={dark}/>} />
        <Route path="/item" exact render={()=><ItemPage dark={dark} />}/>
      </Switch>
      <span id="footer"></span>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
