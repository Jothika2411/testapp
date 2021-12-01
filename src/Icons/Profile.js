import React from "react";
import "../App.css";

import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <div className="sideBar">
      <div className="icon">
        <a href="/profile">
          <CgProfile />
        </a>
      </div>
    </div>
  );
}

export default Profile;
