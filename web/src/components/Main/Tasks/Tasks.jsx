import React from "react";
import "./Tasks.scss";
import { MdInfoOutline } from "react-icons/md";

function Tasks() {
  return (
    <div className="tasks">
      <div className="tasksHeader">
        <h1>Tasks</h1>
        <MdInfoOutline />
      </div>
      <div className="tasksInfo">
        <img
          src="
          https://vignette.wikia.nocookie.net/mortalinstruments/images/d/d4/Pandemonium_Club.png/revision/latest/scale-to-width-down/340?cb=20140227011822"
          alt=""
        />
        <span>
          You entered Pandemonium's secret room, here bounty hunters get their
          tasks and retrieve the prizes upon completion.
        </span>
      </div>
    </div>
  );
}

export default Tasks;
