import React from "react";
import Home from "../Icons/Home";
import Contact from "../Icons/Contact";
import Profile from "../Icons/Profile";
import Share from "../Icons/Share";
import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <div className="">
      <Route path="/home">
        <Home />
      </Route>
      <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/share">
            <Share />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default SideBar;
