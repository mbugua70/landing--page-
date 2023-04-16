import React from "react";
import stylesOne from "./styles/style.module.css";

export default class ModuleOne extends React.Component {
  render() {
    return (
      <>
        <h1 className={stylesOne.display}>React styling with CSS Module</h1>
      </>
    );
  }
}
