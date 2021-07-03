import React, { useState } from "react";
import "./Navbar.css";
import links from "../../data/links";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarBG, setNavbarBG] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const changeNavbarBG = () => {
    if (window.scrollY >= 80) {
      setNavbarBG(true);
    } else {
      setNavbarBG(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBG);

  return (
    <nav className={navbarBG ? `navbar active` : `navbar`}>
      <div className="navbar-center">
        <div className="logo-container">
          <AiFillDingtalkCircle />
        </div>
        <div
          className="toggle-btn"
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <GiHamburgerMenu />
        </div>
        <ul className={sidebarActive ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <li>
              <a href={link.url} className={link.cName}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
