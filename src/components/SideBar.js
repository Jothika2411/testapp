import React from "react";

import "../App.css";
import { AiFillHome } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { IconContext } from "react-icons";

function SideBar() {
  return (
    <IconContext.Provider
      value={{
        color: "white",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div className="sideBar">
        <div className="icon">
          <AiFillHome />
        </div>
        <div className="icon">
          <MdOutlineContactSupport />
        </div>
        <div className="icon">
          <CgProfile />
        </div>

        <div className="icon">
          <FaShareAlt />
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default SideBar;
