import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/formal_main.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=""></img>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>DSA</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=mern">
            <h6>MERN</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=fundamental">
            <h6>FUNDAMENTAL</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=ml">
            <h6>ML</h6>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=java">
            <h6>JAVA</h6>
          </Link>
          <span>HEMEL</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link"  to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
