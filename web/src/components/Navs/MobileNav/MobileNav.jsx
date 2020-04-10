import React, { useState } from "react";
import "./MobileNav.scss";
import { MdMenu, MdClose } from "react-icons/md";
import MobileSide from "./MobileSide";

function MobileNav() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <>
      <div className="mobileNav">
        {isSideOpen ? (
          <MdClose id="leftOpener" onClick={() => setIsSideOpen(false)} />
        ) : (
          <MdMenu id="leftOpener" onClick={() => setIsSideOpen(true)} />
        )}
        <span className="glitch" data-text="Inevitable">
          Inevitable
        </span>
      </div>
      {isSideOpen ? <MobileSide setIsSideOpen={setIsSideOpen} /> : null}
    </>
  );
}
export default MobileNav;
