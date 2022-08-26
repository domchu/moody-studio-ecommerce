import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner_image">
      <div className="banner_text">
        <h2>Hot deal this week</h2>
        <p>
          SALE UP 50% <br />
          MODERN FURNITURE
        </p>
        <li className="btn">
          <Link to="/store" className="btn__links">
            VIEW NOW
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Banner;
