import React from "react";
import ST from "./styles/styleTwo.module.css";

export default class StyleModuleTwo extends React.Component {
  render() {
    return (
      <div className="">
        <nav className={ST.nav}>
          <ul className={ST.list}>
            <li className={ST["list-item"]}>HOME</li>
            <li className={ST["list-item"]}>ABOUT</li>
            <li className={ST["list-item"]}>SERVICES</li>
            <li className={ST["list-item"]}>CONTACT</li>
          </ul>
        </nav>
      </div>
    );
  }
}
