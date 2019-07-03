import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "../src/store/store";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
