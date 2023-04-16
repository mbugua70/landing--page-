import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactDOM from "react-dom/client";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AppTwo from "./AppTwo";
import AppThree from "./AppThree";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const rootTwo = ReactDOM.createRoot(document.getElementById("root2"));
// rootTwo.render(
//   <React.StrictMode>
//     <AppTwo />
//   </React.StrictMode>
// );
const rootThree = ReactDOM.createRoot(document.getElementById("root3"));
rootThree.render(
  <React.StrictMode>
    <AppThree />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
