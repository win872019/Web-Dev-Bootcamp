// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//////////////////////  分隔線  ////////////////////////////////////

/* 課程 content */

// const React=require("react");
// const ReactDOM=require("react-dom");

// ES6
import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   return React.createElement("div", null, [
//     React.createElement("h1", { style: { color: "green" } }, "My profile"),
//     React.createElement("p", null, "My name is Sandra."),
//     React.createElement("button", null, "check"),
//   ]);
// }

// JSX version
function App() {
  return (
    <div>
      <h1>My profile</h1>
      <p>My name is Sandra.</p>
      <button>check</button>
  </div>);
}




ReactDOM.render(App(), document.querySelector("#root"));
