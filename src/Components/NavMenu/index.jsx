import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const links = [
    { name: "casino", path: "/casino" },
    { name: "dining", path: "/dining" },
    { name: "promotions/events", path: "/promotions" },
  ];

  return (
    <>
      <div className={`nav-container center-center ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="link">
          <div className="logo center-center">
            <img src="https://i.imgur.com/aCrE5Lo.png" alt="logo" />
            <div className="casino-name">
              Empire <br /> Sportsmen <br /> Association
            </div>
          </div>
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
        <ul className={`links-container center-center ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li className="link" key={link.name}>
              <Link to={link.path} className="link-styles">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`operational-hours ${menuOpen ? 'active' : ''}`}>
          <div className="hours">Operational Hours</div> Open 24 Hours Every Day
          Of The Week!
        </div>
      </div>
    </>
  );
};

export default NavMenu;
