import React from "react";
import "./LeftNav.scss";
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className="leftNav">
      <nav>
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

        <Link to="/hospital">
          <div id="menu-sprite-hospital" className="menu-sprite"></div>
          <div>
            <span>Hospital</span>
            <br />
            Healthcare!
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
