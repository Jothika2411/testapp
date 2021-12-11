import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import AssignmentRules from "../assets/AssignmentRules.svg";
import Tickets from "../assets/Tickets.svg";
import Logout from "../assets/Logout.svg";

const SideBar = () => {
  return (
    <nav>
      <div className="sideBar">
        <div className="icon">
          <NavLink eaxct to="/" activeClassName="active-link">
            <img src={Dashboard} alt="Dashboard" />
          </NavLink>
        </div>
        <div className="icon">
          <NavLink exact to="/contact" activeClassName="active-link">
            <img src={AssignmentRules} alt="AssigmentRules" />
          </NavLink>
        </div>
        <div className="icon">
          <NavLink to="/profile" activeClassName="active-link">
            <img src={Tickets} alt="Tickets" />
          </NavLink>
        </div>
        <div className="icon">
          <NavLink to="/share" ClassName="active-link">
            <img src={Logout} alt="Logout" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
