import React from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import AssignmentRules from "../assets/AssignmentRules.svg";
import Tickets from "../assets/Tickets.svg";
import Logout from "../assets/Logout.svg";

const SideBar = () => {
  const history = useHistory();

  const getColor = (curr) => {
    if (history.location.pathname === curr) {
      return "#FFFFFF";
    }
  };

  return (
    <nav>
      <div className="sideBar">
        <div className="icon">
          <Link to="/" style={{ backgroundColor: getColor("./") }}>
            <img src={Dashboard} alt="Dashboard" />
          </Link>
        </div>
        <div className="icon">
          <Link
            to="/contact"
            style={{ backgroundColor: getColor("./contact") }}
          >
            <img src={AssignmentRules} alt="AssigmentRules" />
          </Link>
        </div>
        <div className="icon">
          <Link
            to="/profile"
            style={{ backgroundColor: getColor("./profile") }}
          >
            <img src={Tickets} alt="Tickets" />
          </Link>
        </div>
        <div className="icon">
          <Link to="/share" style={{ backgroundColor: getColor("./share") }}>
            <img src={Logout} alt="Logout" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
