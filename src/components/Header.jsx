import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiMenu } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header">
      <h1>MOODY STUDIO</h1>
      <div className="icon-name">
        <BsSearch className="icon" />
        <BiUser className="icon" />
        <GiShoppingCart className="icon" />
        <BsHeart className="icon" />
        {/* the theme section of the project  */}

        {/* the end of the Light mode */}
      </div>
      <div className="small__screen">
        <BiMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="mobile__view__overlay">
            <FaRegTimesCircle
              className="close__icon"
              color="#ccc"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navlink__mobile__view">
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
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
//darkStyle and lightStyle declarative

export default Header;
