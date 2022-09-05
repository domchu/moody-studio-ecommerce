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
            <Link to="/Product">Store</Link>
          </li>
          <li>
            <Link to="/Product">Accessories</Link>
          </li>
          <li>
            <Link to="/TopRate">Brand</Link>
          </li>
          <li>
            <Link to="/Footer">Pages</Link>
          </li>
          <li>
            <Link to="/Terms">About Us</Link>
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
