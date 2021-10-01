import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
  };

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
