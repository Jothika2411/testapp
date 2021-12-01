import React from "react";
import Home from "../Icons/Home";
import Contact from "../Icons/Contact";
import Profile from "../Icons/Profile";
import Share from "../Icons/Share";
import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/share" element={<Share />} />
        </Routes>
      </Router>
    </div>
  );
}
export default SideBar;
