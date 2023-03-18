import React from "react";
import "./Teamcard.css";
import LazyLoad from 'react-lazyload';
import RenderSmoothImage from 'render-smooth-image-react';
import './stylex.css';
const Teamcard = ({
  name1,
  name2,
  imgsrc,
  gitbool,
  linkedbool,
  instabool,
  fbbool,
  gitlink,
  linkedlink,
  instalink,
  fblink,
}) => {
  const getgit = () => {
    if (gitbool)
      return (
        <a href={gitlink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      );
    else return null;
  };
  const getlinked = () => {
    if (linkedbool)
      return (
        <a href={linkedlink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      );
    else return null;
  };
  const getinsta = () => {
    if (instabool)
      return (
        <a href={instalink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      );
    else return null;
  };
  const getfb = () => {
    if (fbbool)
      return (
        <a href={fblink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
      );
    else return null;
  };

  return (
    <div className="containercard">
      <LazyLoad height={280} offset={400} once={true}>
        <RenderSmoothImage src={imgsrc?imgsrc:'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg'} alt="Profile pic" />
      </LazyLoad>
      <div className="contentcard">
        <div className="mname">
          {name1} <br /> {name2}
        </div>

        <div className="icons">
          {getgit()}
          {getlinked()}
          {getinsta()}
          {getfb()}
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
