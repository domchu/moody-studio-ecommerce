import React from "react";
import { Link } from "react-router-dom";
import Images from "./constants/images";

const Main = () => {
  return (
    <div className="main__images">
      <div className="main_img">
        <img src={Images.chair} alt="chair" className="chair__pot" />
        <div className="main_text">
          <h1>IVY VINTAGE CHAIR</h1>
          <li className="btn">
            <Link to="/store" className="btn__links">
              VIEW DETAILS
            </Link>
          </li>
        </div>
      </div>
      <div className="main_img">
        <img src={Images.pot} alt="pot" className="chair__pot" />
        <div className="main_text">
          <h1>LARGE TARRACOTA VASE</h1>
          <li className="btn">
            <Link to="/store" className="btn__links">
              VIEW DETAILS
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Main;
