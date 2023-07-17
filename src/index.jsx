import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import Home from "./components/view/Home";

import store from "./redux/store"
import { Provider } from "react-redux"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Provider store={store}>
        <Home />
      </Provider>
  </React.StrictMode>
);
