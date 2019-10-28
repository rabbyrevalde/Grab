import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";

//STORE -- Globalized State

// ACTION   (* whatever action you want)
const test = () => {
  return {
    type: "test"
  };
};
const test2 = () => {
  return {
    type: "test"
  };
};

// REDUCER (check)

const test3 = (state = 0, action) => {
  switch (action.type) {
    case "test":
      return state + 1;
    case "test2":
      return state - 1;
  }
};

let store = createStore(test3);
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(test());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
