import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function setTitle(title) {
  document.title = title;
}

setTitle("Bass Drum Machine");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
