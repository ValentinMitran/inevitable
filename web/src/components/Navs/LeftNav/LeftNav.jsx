import React from "react";
import "./LeftNav.scss";
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className="leftNav">
      <nav>
        <Link to="/attack">
          <div id="menu-sprite-assault" className="menu-sprite"></div>
          <div>
            <span>Attack</span>
            <br />
            Have a drink!
          </div>
        </Link>
        <Link to="/missions">
          <div id="menu-sprite-robbery" className="menu-sprite"></div>
          <div>
            <span>Missions</span>
            <br />
            Do your job!
          </div>
        </Link>
        <Link to="/club">
          <div id="menu-sprite-nightlife" className="menu-sprite"></div>
          <div>
            <span>Club</span>
            <br />
            Have some fun
          </div>
        </Link>
        <Link to="/stockmarket">
          <div id="menu-sprite-drugdealer" className="menu-sprite"></div>
          <div>
            <span>Stock Market</span>
            <br />
            Invest!
          </div>
        </Link>
        <Link to="/buildings">
          <div id="menu-sprite-buildings" className="menu-sprite"></div>
          <div>
            <span>Buildings</span>
            <br />
            Real estate at its finest!
          </div>
        </Link>
        <Link to="/hospital">
          <div id="menu-sprite-hospital" className="menu-sprite"></div>
          <div>
            <span>Hospital</span>
            <br />
            Healthcare!
          </div>
        </Link>
        <Link to="/bank">
          <div id="menu-sprite-bank" className="menu-sprite"></div>
          <div>
            <span>Bank</span>
            <br />
            Your finances!
          </div>
        </Link>
        <Link to="/casino">
          <div id="menu-sprite-casino" className="menu-sprite"></div>
          <div>
            <span>Casino</span>
            <br />
            Why not try to win some easy cash?
          </div>
        </Link>
        <Link to="/prison">
          <div id="menu-sprite-prison" className="menu-sprite"></div>
          <div>
            <span>Prison</span>
            <br />
            Bad people bad place!
          </div>
        </Link>
      </nav>
    </div>
  );
}
export default LeftNav;
