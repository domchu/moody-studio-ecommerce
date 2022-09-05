import React from "react";
import { Switch, Router, Route } from "react-router-dom";

const HandleNavlink = () => {
  return (
    <main>
      <switch>
        <Route path="/Product" component={Store} />
        <Route path="/Footer" component={Contact} />
        <Route path="/ Newsletter" component={News} />
        <Route path="/TopRate" component={Brand} />
        <Route exact path="/" component={Home} />
      </switch>
    </main>
  );
};

export default HandleNavlink;
