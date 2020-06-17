import React from "react";
import Logo from "../../img/icon.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="top-line"></div>
      <div className="navbar-content">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo" />
        </Link>

        <ul className="list-group">
          <Link className="list-item" to="/">
            <li>Home</li>
          </Link>
          <Link className="list-item" to="/">
            <li>Social</li>
          </Link>
          <Link className="list-item" to="/">
            <li>Forum</li>
          </Link>
          <Link className="list-item" to="/">
            <li>Login</li>
          </Link>
          <Link className="list-item" to="/">
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
