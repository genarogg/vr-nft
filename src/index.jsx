import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import "./css/style.css";
import Home from "./components/view/Home";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
