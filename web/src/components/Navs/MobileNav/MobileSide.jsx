import React from "react";
import "./MobileNav.scss";
import { Link } from "react-router-dom";

function MobileSide() {
  return (
    <>
      <div className="mobileSide">
        <div className="userProfile">
          <img
            src="https://yt3.ggpht.com/-yiwpbXgTmYE/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPMcgnrP1cptGUy-IH3cMbPHhfVIg/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg"
            alt="Profile"
          />
          <div>@lol</div>
          "Rookie"
        </div>
        <hr />
        <div className="stats">
          <div className="stat">
            <span>Intelligence</span>
            590
          </div>
          <div className="stat">
            <span>Strength</span>
            670
          </div>
          <div className="stat">
            <span>Charisma</span>
            714
          </div>
          <div className="stat">
            <span>Tolerance</span>
            684
          </div>
        </div>
        <div className="balance">
          <span>Cash</span> &#36; 76,181
        </div>
        <hr />
        <div className="vitals">
          <span>Energy: 100%</span>
          <span>Cops: 10%</span>
        </div>
        <hr />
        <div className="credits">Credits: 0</div>
        <hr />
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
    </>
  );
}
export default MobileSide;
