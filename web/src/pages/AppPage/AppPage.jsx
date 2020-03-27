import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";

import "./AppPage.scss";

function AppPage() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="main">Root </div>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default AppPage;