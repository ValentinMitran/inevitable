import React from "react";
import "./MobileNav.scss";
import { Link } from "react-router-dom";

function MobileSide({ setIsSideOpen }) {
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
          <Link to="/missions" onClick={() => setIsSideOpen(false)}>
            <div id="menu-sprite-robbery" className="menu-sprite"></div>
            <div>
              <span>Missions</span>
              <br />
              Do your job!
            </div>
          </Link>
          <Link to="/club" onClick={() => setIsSideOpen(false)}>
            <div id="menu-sprite-nightlife" className="menu-sprite"></div>
            <div>
              <span>Club</span>
              <br />
              Have some fun
            </div>
          </Link>
          <Link to="/hospital" onClick={() => setIsSideOpen(false)}>
            <div id="menu-sprite-hospital" className="menu-sprite"></div>
            <div>
              <span>Hospital</span>
              <br />
              Healthcare!
            </div>
          </Link>

          <Link to="/prison" onClick={() => setIsSideOpen(false)}>
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
