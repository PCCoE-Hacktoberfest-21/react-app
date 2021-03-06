import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav className={navbar && !click ? "navbar active" : "navbar"}>
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-text">Random Users</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
