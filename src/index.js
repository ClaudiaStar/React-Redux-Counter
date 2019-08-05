import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";

var destination = document.querySelector("#container");

//Initialize Redux Store

var store = createStore(counter);

//Pass in "store" to the Provider component which needs to be the outermost component in the app in order for all components to have access to Redux store and functionality.

ReactDOM.render (
  <Provider store={store}>
    <App/>
  </Provider>,
  destination
);
