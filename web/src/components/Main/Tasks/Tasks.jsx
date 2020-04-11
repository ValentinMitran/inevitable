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
          src="https://vignette.wikia.nocookie.net/remnantsofearth/images/8/8d/Bountyhunterlogo.png/revision/latest/scale-to-width-down/340?cb=20140502113602"
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
