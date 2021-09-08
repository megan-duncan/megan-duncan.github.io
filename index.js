import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App.jsx";
import "./styles/main.css";

const appRouting = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(appRouting, document.getElementById("root"));