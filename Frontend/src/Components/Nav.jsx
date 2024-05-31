import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Nav.css";

const Nav = () => {
  const [sidebar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(!sidebar);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SpeedyBites
          </Link>
          <div className="menu-icon" onClick={toggleSidebar}>
            <i className={sidebar ? "bi bi-x" : "bi bi-list"}></i>
          </div>
          <ul className={sidebar ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleSidebar}>
                <i class="bi bi-house-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/popular" className="nav-links" onClick={toggleSidebar}>
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-links" onClick={toggleSidebar}>
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
