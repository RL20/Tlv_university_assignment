import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="header-wraper">
          <div className="logo"></div>
          <div className="group_header_txt">
            <span>אגף מחשוב וטכנולוגיות מידע</span>
            <div>אוניברסיטת תל אביב</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
