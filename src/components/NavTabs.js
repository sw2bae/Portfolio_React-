import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={process.env.PUBLIC_URL + '/'} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={process.env.PUBLIC_URL + '/about'}
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={process.env.PUBLIC_URL + '/projects'}
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={process.env.PUBLIC_URL + '/contact'}
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
