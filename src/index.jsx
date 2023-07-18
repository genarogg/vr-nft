import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";
import Home from "./components/view/Home";

import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
