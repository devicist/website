import React from "react";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

import "./App.css";

import "./assets/scss/style.scss";

import { render, hydrate } from "react-dom";

const history = createBrowserHistory();
const rootElement = document.getElementById("root");

// react-snap only pre-renders "/". On any other route, index.html still
// contains that pre-rendered home page markup (GitHub Pages serves the same
// file for every route), so hydrating against it here would reconcile the
// wrong component tree and corrupt the layout. Only hydrate on the route
// that was actually pre-rendered; otherwise clear it and render fresh.
if (rootElement.hasChildNodes() && window.location.pathname === "/") {
  hydrate(
    <Router history={history}>
      <App />
    </Router>,
    rootElement
  );
} else {
  rootElement.innerHTML = "";
  render(
    <Router history={history}>
      <App />
    </Router>,
    rootElement
  );
}
