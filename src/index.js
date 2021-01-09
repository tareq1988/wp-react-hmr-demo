import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";

var mountNode = document.getElementById("hmr-app");
ReactDOM.render(<App name="Jane" />, mountNode);
