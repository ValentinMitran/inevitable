import React from "react";
import "./LandingPage.scss";
import { withRouter } from "react-router-dom";

function LandingPage({ history }) {
  return (
    <div id="lp">
      <div id="lpWrapper">
        <h1 class="glitch" data-text="Inevitable">
          Inevitable
        </h1>
        <span class="sub">The Cyberpunk era starts here</span>
        <button class="btn" onClick={() => history.push("/login")}>
          <span class="btn__content glitchBtn" data-text="ENTER">
            ENTER
          </span>
          <span class="btn__glitch"></span>
          <span class="btn__label">Inevitable</span>
        </button>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
