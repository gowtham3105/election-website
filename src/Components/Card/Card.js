import React from "react";
import "./Card.css";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";
import RenderSmoothImage from "render-smooth-image-react";
import "./stylex.css";
//import { showModel } from './../../App.js'
const Card = ({
  cand_imgsrc,
  cand_name,
  cand_id,
  cand_branch,
  cand_intro,
  cand_manifesto,
  updateLoadx,
  increaseHeight,
  id,
}) => {
  return (
    <div
      className={increaseHeight ? "card cardHeightSet" : "card"}
    >
      <Reveal effect="animtop">
        <div className="ds-top" />
      </Reveal>
      <Reveal effect="animprof">
        <div className="avatar-holder">
          <LazyLoad height={200} offset={300} once={true}>
            <div className="cardimg">
              <RenderSmoothImage src={cand_imgsrc} alt="Profile pic" />
            </div>
          </LazyLoad>
        </div>
      </Reveal>

      <Fade left>
        <div className="name">
          <div id="namex" href="#">
            {cand_name}
          </div>

          <div id="dept" href="">
            {cand_branch}
          </div>

          <div id="email" href="#">
            {cand_id}
          </div>
        </div>
      </Fade>
      {cand_manifesto !== "" ? (
        <div className="buttonhold">
          <button
            className="Button_Secondary"
            onClick={() => {
              window.open(cand_manifesto);
            }}
          >
            <i className="fa fa-file" aria-hidden="true"></i> Manifesto
          </button>

          {/* <button
          className="Button_Secondary"
          onClick={() => {
            showModel(true, cand_intro);
          }}
        >
          <i className="fa fa-youtube-play" aria-hidden="true"></i> Intro
        </button> */}
        </div>
      ) : (
        <div className="buttonhold">
          <button
            className="Button_Secondary"
            style={{ opacity: 0.5, cursor: "default", pointerEvents: "none" }}
            disabled={true}
          >
            <i className="fa fa-file" aria-hidden="true"></i> Manifesto
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
