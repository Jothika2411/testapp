import React from "react";
import "../App.css";

import { MdOutlineContactSupport } from "react-icons/md";

function Contact() {
  return (
    <div className="sideBar">
      <div className="icon">
        <a href="/contact">
          <MdOutlineContactSupport />
        </a>
      </div>
    </div>
  );
}

export default Contact;
