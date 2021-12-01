import React from "react";
import "../App.css";
import { AiFillHome } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div className="sideBar">
        <div className="icon">
          <a href="/">
            <AiFillHome />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
