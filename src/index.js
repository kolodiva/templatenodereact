import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom";
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const initialState = {
  name: "React Here Baby."
};

function rootReducer(state = initialState, action) {
  if (action.type === 'CNGE_NAME') {
    return {name: action.payload};
  }
  return state;
}

const store = createStore(rootReducer);

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));



