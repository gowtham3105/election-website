import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import load1 from "./load1.png";
import load2 from "./load2.png";
import favicon from "./favicon.ico"
ReactDOM.render(
  <div>
    <div className="img1">
      <img src={load1} id="icon1" alt="icon1" />
    </div>
    <div className="img2">
      <img src={load2} id="icon2" alt="icon2" />
    </div>
  </div>,
  document.getElementById("loader")
);

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");
var x = document.getElementById("icon1");
var y = document.getElementById("icon2");

function LoadImage() {
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
    <link rel="shortcut icon" href={favicon} />
    <App hideLoader={hideLoader} showLoader={showLoader} />
  </div>,
  document.getElementById("root")
);
