import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");
var x = document.getElementById("icon1");
var y = document.getElementById("icon2");

function LoadImage() {
  x.src = "./load1.png";
  y.src = "./load2.png";

  x.style.visibility = "hidden";
  y.style.visibility = "hidden";
}
LoadImage();
var intervalID = setInterval(CheckIsLoaded, 0);

function CheckIsLoaded() {
  if (x.complete) x.style.visibility = "visible";
  if (y.complete) y.style.visibility = "visible";

  if (x.complete && y.complete) clearInterval(intervalID);
}

ReactDOM.render(
  <div>
    <App hideLoader={hideLoader} showLoader={showLoader} />
  </div>,
  document.getElementById("root")
);
