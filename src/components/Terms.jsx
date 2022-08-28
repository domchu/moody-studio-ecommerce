import React from "react";
import { BsTruck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";

const Terms = () => {
  return (
    <div className="term_condition">
      <div className="promises">
        <BsTruck className="promises_icons" />
        <p>FREE SHIPPING</p>
      </div>
      <div className="promises">
        <BsCreditCard className="promises_icons" />
        <p>100% MONEY BACK</p>
      </div>
      <div className="promises">
        <BiSupport className="promises_icons" />
        <p>SUPPORT 24/7</p>
      </div>
    </div>
  );
};
export default Terms;
