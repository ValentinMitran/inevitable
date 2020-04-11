import React from "react";
import "./Club.scss";
import { MdInfoOutline } from "react-icons/md";

function Club() {
  return (
    <div className="club">
      <div className="clubHeader">
        <h1>Club</h1>
        <MdInfoOutline />
      </div>
      <div className="clubInfo">
        <img
          src="
          https://vignette.wikia.nocookie.net/mortalinstruments/images/d/d4/Pandemonium_Club.png/revision/latest/scale-to-width-down/340?cb=20140227011822"
          alt=""
        />
        <span>
          You entered Pandemonium, the City's most reputed and dangerous club.
        </span>
      </div>
    </div>
  );
}

export default Club;
