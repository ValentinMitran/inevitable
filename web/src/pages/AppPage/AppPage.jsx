import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import LeftNav from "./../../components/Navs/LeftNav/LeftNav";
import Tasks from "./../../components/Main/Tasks/Tasks";
import RightNav from "./../../components/Navs/RightNav/RightNav";

import "./AppPage.scss";

function AppPage() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="appPage">
            <LeftNav />
            <Tasks />
            <RightNav />
          </div>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default AppPage;
