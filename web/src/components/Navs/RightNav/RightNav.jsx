import React from "react";
import "./RightNav.scss";

function RightNav() {
  return (
    <div className="rightNav">
      <div className="userProfile">
        <img
          src="https://avatarfiles.alphacoders.com/206/thumb-206406.jpg"
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
    </div>
  );
}
export default RightNav;
