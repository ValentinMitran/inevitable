import React from "react";
import "./Hospital.scss";
import { MdInfoOutline } from "react-icons/md";

function Hospital() {
  return (
    <>
      <div className="hospital">
        <div className="hospitalHeader">
          <h1>Hospital</h1>
          <MdInfoOutline />
        </div>
        <div className="hospitalInfo">
          <img
            src="
            https://i.pinimg.com/originals/27/0f/9f/270f9f6e75b06bb3300e3ceb45769644.jpg"
            alt=""
          />
          <span>
            If you're out of energy or need a repair on your sleeve, here's your
            spot.
          </span>
        </div>
      </div>
    </>
  );
}

export default Hospital;
