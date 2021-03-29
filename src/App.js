import React from "react";
import Header from "./components/Header/Header.js";
import Tabs from "./components/Tabs/Tabs.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compare from "./components/Random/Random.js";
import Friends from "./components/Friends/Friends.js";
import Upcoming from "./components/Upcoming/Upcoming.js";
import Home from "./components/Home/Home.js";
import SignUp from "./components/SignUp/SignUp.js";
import SignIn from "./components/SignIn/SignIn.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Tabs />
        <Switch>
          <Route path="/compare" component={Compare} />
          <Route path="/friends" component={Friends} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
