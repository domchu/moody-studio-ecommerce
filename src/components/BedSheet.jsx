import React from "react";
import { Link } from "react-router-dom";
// import Images from "./constants/images";

function BedSheet() {
  return (
    <div className="bedsheet__container">
      <div className="bedsheet__container__text">
        <h2>BEDSHEET SETS</h2>
        <div className="price">
          <div className="price__amount">
            <h2 style={{ color: "#9d5b05", margin: "1rem 0" }}>$50:00</h2>
            <h2
              style={{
                color: "#9d5b05",
                margin: "1rem 3rem",
                textDecoration: "line-through",
              }}
            >
              $250:00
            </h2>
          </div>
          <div className="bedsheet__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              necessitatibus reprehenderit quaerat?
            </p>
          </div>
          <Link to="/Store">
            <button className="btn bedsheet__btn">VIEW DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BedSheet;
