import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Jokes from "./pages/joke";
import Main from "./pages/main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Main />} />
      <Route path="/joke/:category" exact render={() => <Jokes />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
