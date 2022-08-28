import React from "react";
import { BiEnvelope } from "react-icons/bi";

function NewsLetter() {
  return (
    <div className="newsletter_text">
      <div className="newsletter">
        <h2>SIGN UP FOR THE NEWSLETTER</h2>
        <p>Subscribe for the latest stories and promotions</p>
      </div>
      <div className="newsletter__search">
        <input
          type="search"
          className="search"
          placeholder="Enter your e-mail address"
        />
        <BiEnvelope className="search__envelope" />
      </div>
    </div>
  );
}

export default NewsLetter;
