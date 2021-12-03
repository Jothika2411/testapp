import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Dashboard from "./assets/Dashboard.svg";
import AssignmentRules from "./assets/AssignmentRules.svg";
import Tickets from "./assets/Tickets.svg";
import Logout from "./assets/Logout.svg";

function SideBar() {
  return (
    <nav>
      <div className="sideBar">
        <div className="icon">
          <Link to="/">
            <img src={Dashboard} alt="Dashboard" />
          </Link>
        </div>
        <div className="icon">
          <Link to="/contact">
            <img src={AssignmentRules} alt="AssigmentRules" />
          </Link>
        </div>
        <div className="icon">
          <Link to="/profile">
            <img src={Tickets} alt="Tickets" />
          </Link>
        </div>
        <div className="icon">
          <Link to="/share">
            <img src={Logout} alt="Logout" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default SideBar;
