import React, { useState } from "react";
import "./Navbar.css";
import links from "../../data/links";
import { AiFillDingtalkCircle } from "react-icons/ai";

const Navbar = () => {
  const [navbarBG, setNavbarBG] = useState(false);

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
        <ul className="nav-links">
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
