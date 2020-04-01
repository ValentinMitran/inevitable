import React from "react";
import "./RightNav.scss";

function RightNav() {
  return (
    <div className="rightNav">
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
          <span>Intelligence</span> 590
        </div>
        <div className="stat">
          <span>Strength</span> 670
        </div>
        <div className="stat">
          <span>Charisma</span> 714
        </div>
        <div className="stat">
          <span>Tolerance</span> 684
        </div>
      </div>
      <div className="balance">Cash: &#36; 76,181</div>
      <hr />
    </div>
  );
}
export default RightNav;
