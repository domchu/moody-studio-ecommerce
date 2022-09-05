import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div>
      <div className="navlink">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/">Accessories</Link>
          </li>
          <li>
            <Link to="/">Brand</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/Newsletter">News</Link>
          </li>
          <li>
            <Link to="/Footer">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavLink;
