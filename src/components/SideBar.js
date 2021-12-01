import React from "react";
import Home from "../Icons/Home";
import Contact from "../Icons/Contact";
import Profile from "../Icons/Profile";
import Share from "../Icons/Share";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />{" "}
          </Route>
          <Route path="/contact">
            <Contact />{" "}
          </Route>
          <Route path="/profile">
            <Profile />{" "}
          </Route>

          <Route path="/share">
            <Share />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default SideBar;
