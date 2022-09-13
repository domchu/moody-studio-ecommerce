import React from "react";
import { Link } from "react-router-dom";

function NavLink({ color }) {
  return (
    <div>
      <div className="navlink">
        <ul className="menu">
          <li>
            <Link to="/" style={{ color: color }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Product" style={{ color: color }}>
              Store
            </Link>
          </li>
          <li>
            <Link to="/Product" style={{ color: color }}>
              Accessories
            </Link>
          </li>
          <li>
            <Link to="/TopRate" style={{ color: color }}>
              Brand
            </Link>
          </li>
          <li>
            <Link to="/Footer" style={{ color: color }}>
              Pages
            </Link>
          </li>
          <li>
            <Link to="/Terms" style={{ color: color }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Newsletter" style={{ color: color }}>
              News
            </Link>
          </li>
          <li>
            <Link to="/Footer" style={{ color: color }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavLink;
