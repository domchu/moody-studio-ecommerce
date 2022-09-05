import { Switch, Router, Route } from "react-router-dom";
import navlink from "./NavLink";

import React from "react";

const HandleNavlink = () => {
  return (
    <main>
      <switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product" component={Store} />
        <Route path="/Footer" component={Contact} />
        <Route path="/ Newsletter" component={News} />
        <Route path="/TopRate" component={Brand} />
      </switch>
    </main>
  );
};

export default HandleNavlink;
