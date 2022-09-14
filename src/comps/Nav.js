import React, { useEffect, useState } from "react";
import "../css/nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="/images/NETFLIX_logo.svg"
          alt="Netflix Logo"
        />

        <img
          className="nav_avatar"
          src="/images/Netflix_avatar.png"
          alt="Netflix Aatar"
        />
      </div>
    </div>
  );
}

export default Nav;
