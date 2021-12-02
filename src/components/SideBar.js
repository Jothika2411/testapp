import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaShareAlt } from "react-icons/fa";
import { Link, Router } from "react-router-dom";
import "../App.css";

function SideBar() {
  return (
    <Router>
      <nav>
        <div className="sideBar">
          <div className="icon">
            <Link to="/">
              <AiFillHome />
            </Link>
          </div>
          <div className="icon">
            <Link to="/contact">
              <MdOutlineContactSupport />
            </Link>
          </div>
          <div className="icon">
            <Link to="/profile">
              <CgProfile />
            </Link>
          </div>
          <div className="icon">
            <Link to="/share">
              <FaShareAlt />
            </Link>
          </div>
        </div>
      </nav>
    </Router>
  );
}
export default SideBar;
