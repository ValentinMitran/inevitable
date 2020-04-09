import React from "react";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <div id="lp">
      <div id="lpWrapper">
        <h1 class="glitch" data-text="Inevitable">
          Inevitable
        </h1>
        <span class="sub">The Cyberpunk era starts here</span>
        <button class="btn">
          <span class="btn__content">ENTER</span>
          <span class="btn__glitch"></span>
          <span class="btn__label">Inevitable</span>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
