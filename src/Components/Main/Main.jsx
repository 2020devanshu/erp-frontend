import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Login/Login";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Login" component={Login} />
      </Switch>
    </main>
  );
};

export default Main;
