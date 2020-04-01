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
      <div className="appPage">
        <LeftNav />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Tasks />
            </Route>
            <Route path="/attack">Attack</Route>
            <Route path="/missions">
              <Tasks />
            </Route>
            <Route path="/club">Club </Route>
            <Route path="/stockmarket">StockMarket</Route>
            <Route path="/buildings">Buildings</Route>
            <Route path="/hospital">Hospital</Route>
            <Route path="/bank">Bank</Route>
            <Route path="/casino">Casino</Route>
            <Route path="/prison">Prison</Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <RightNav />
      </div>
    </>
  );
}

export default AppPage;
