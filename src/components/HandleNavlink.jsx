import { Switch, Router, Route } from "react-router-dom";
import navlink from "./NavLink";

import React from "react";

const HandleNavlink = () => {
  return (
    <main>
      <Route exact path="/" component={Home} />
    </main>
  );
};

export default HandleNavlink;
