import React from "react";
import "./Card.css";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <Reveal effect="animtop">
        <div className="ds-top" />
      </Reveal>
      <Reveal effect="animprof">
        <div className="avatar-holder">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
            alt="Albert Einstein"
          />
        </div>
      </Reveal>

      <Fade left>
        <div className="name">
          <a id="namex">{name}</a>
          <br />
          <a id="dept">3rd year,CSE dept.</a>
          <br />
          <a id="email">
            <i class="fa fa-envelope" aria-hidden="true"></i> {email}
          </a>
          <br />
        </div>
      </Fade>
      <div className="buttonhold">
        <button class="btn">
          <i class="fa fa-file" aria-hidden="true"></i> Manifesto
        </button>
        <button class="btn">
          <i class="fa fa-youtube-play" aria-hidden="true"></i> Intro
        </button>
      </div>
    </div>
  );
};

export default Card;
