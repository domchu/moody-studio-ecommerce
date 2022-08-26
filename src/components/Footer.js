import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__contact">
        <h2>URBAN OUTFITTERS</h2>
        <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "12px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          natus?
        </p>
        <div className="footer__address">
          <h4>121 street melbourne 3000</h4>
          <h4>+61 8376 6284</h4>
          <h4>contact@urbanoutffiters.com</h4>
        </div>
        <div className="social__icons">
          <TiSocialFacebook className="footer__icons" />
          <FiTwitter className="footer__icons" />
          <BsInstagram className="footer__icons" />
          <ImYoutube2 className="footer__icons" />
        </div>
      </div>
      <div className="footer__contact">
        <h2>SHOPPING</h2>
        <li>
          <Link to="/Product"> Your cart</Link>
        </li>
        <li>
          <Link to="/Product">Your orders</Link>
        </li>
        <li>
          <Link to="/Product">Compared items</Link>
        </li>
        <li>
          <Link to="/Product">Wishlist items</Link>
        </li>
        <li>
          <Link to="/Product">Shipping details</Link>
        </li>
      </div>
      <div className="footer__contact">
        <h2>MORE LINKS</h2>
        <li>
          <Link to="/Product"> Blog</Link>
        </li>
        <li>
          <Link to="/Product">Buying Guides</Link>
        </li>
        <li>
          <Link to="/Product">Gift centers</Link>
        </li>
        <li>
          <Link to="/Product">New Arrivals</Link>
        </li>
        <li>
          <Link to="/Product">Clearance</Link>
        </li>
      </div>
      <div className="footer__contact">
        <h2>FROM THE BLOG</h2>
        <div className="footer__text">
          <p>26 May</p>
          <p style={{ fontSize: "12px", color: "#ccc" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing consectetur
            adipisicing.
          </p>
          <p>3 comments</p>
        </div>
        <div className="footer__text">
          <p>27 May</p>
          <p style={{ fontSize: "12px", color: "#ccc" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>3 comments</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
