import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import LeftNav from "./../../components/Navs/LeftNav/LeftNav";
import Newspaper from "./../../components/Main/Newspaper/Newspaper";
import Tasks from "./../../components/Main/Tasks/Tasks";
import RightNav from "./../../components/Navs/RightNav/RightNav";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";

import "./AppPage.scss";
import MobileNav from "../../components/Navs/MobileNav/MobileNav";
toast.configure();

function AppPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {}, []);

  return (
    <>
      <div className="app">
        <div className="appPage">
          {isMobile ? <MobileNav /> : <LeftNav />}
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Newspaper />
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
          {isMobile ? null : <RightNav />}
        </div>
      </div>
    </>
  );
}

export default AppPage;
