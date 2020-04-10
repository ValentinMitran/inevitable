import React from "react";
import "./Prison.scss";
import { MdInfoOutline } from "react-icons/md";

function Prison() {
  return (
    <>
      <div className="prison">
        <div className="prisonHeader">
          <h1>Prison</h1>
          <MdInfoOutline />
        </div>
        <div className="prisonInfo">
          <img
            src="
        https://c.wallhere.com/photos/f4/f9/soldier_prisoners_drawing_men_chains_handcuffed_prison_scars-1698791.jpg!d"
            alt=""
          />
          <span>
            Prison is the place for screw-up's and criminals, just like you. The
            only difference between you and them is that you're not in prison,
            yet. Be alert and keep it cool 'cause prison can break even the
            toughest guys.There are x gangster(s) in prison.
          </span>
        </div>
        <div className="prisonAction">
          <h2>Help prisoner escape</h2>
          <span>
            Do you have a friend in prison that you want to help? Or maybe a
            person you'd rather kill yourself than let him rotten in prison.
            What ever reason you might have you have come to the right place.
            Type your friends name in the box below and press the button to set
            him free. This service will cost you 10 credits.
          </span>
          <form action="">
            <input type="text" />
            <button>Release</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Prison;
