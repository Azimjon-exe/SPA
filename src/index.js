import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const spa = ReactDOM.createRoot(document.getElementById("spa"));
spa.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
