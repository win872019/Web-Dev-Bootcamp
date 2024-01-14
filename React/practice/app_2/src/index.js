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
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
