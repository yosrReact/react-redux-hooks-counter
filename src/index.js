import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"; 
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
