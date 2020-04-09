import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import LeftNav from "./../../components/Navs/LeftNav/LeftNav";
import Newspaper from "./../../components/Main/Newspaper/Newspaper";
import Tasks from "./../../components/Main/Tasks/Tasks";
import RightNav from "./../../components/Navs/RightNav/RightNav";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

import "./AppPage.scss";
toast.configure();

function AppPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <div className="appPage">
        <div className="mobileNav">
          {isLeftOpen ? (
            <MdClose id="leftOpener" onClick={() => setIsLeftOpen(false)} />
          ) : (
            <MdMenu id="leftOpener" onClick={() => setIsLeftOpen(true)} />
          )}
          <span className="glitch" data-text="Inevitable">
            Inevitable
          </span>
          {isRightOpen ? (
            <MdClose id="rightOpener" onClick={() => setIsRightOpen(false)} />
          ) : (
            <MdMenu id="rightOpener" onClick={() => setIsRightOpen(true)} />
          )}
        </div>
        {isMobile ? isLeftOpen ? <LeftNav /> : null : <LeftNav />}
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
        {isMobile ? isRightOpen ? <RightNav /> : null : <RightNav />}
      </div>
    </>
  );
}

export default AppPage;
