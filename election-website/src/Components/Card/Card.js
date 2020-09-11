import React from 'react';
import './Card.css'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import {showModel} from './../../App.js'
const Card = ({ imgUrl, name, email, branch, introUrl, manifestoUrl, id }) => {


    return (
      <div className="card">
      <Reveal effect="animtop">
        <div className="ds-top" />
      </Reveal>
      <Reveal effect="animprof">
        <div className="avatar-holder">
          <img src={imgUrl} alt="Albert Einstein" />
        </div>
      </Reveal>

      <Fade left>
           <div className="name">
          <a id='namex' href='#time'>{name}</a><br/>
          <a id='dept' href='#time'>{branch}</a><br/>
          <a id='email' href='#time'><i className="fa fa-envelope" aria-hidden="true"></i> {email}</a><br/>
          </div>
       </Fade>
        <div className="buttonhold">
          <button className="Button_Secondary" onClick = {() =>{window.open(manifestoUrl)}}  ><i className="fa fa-file" aria-hidden="true"></i> Manifesto</button>
          <button className="Button_Secondary" onClick={() => { showModel(true, introUrl)}}><i className="fa fa-youtube-play" aria-hidden="true"></i> Intro</button>
        </div>
      </div>
    );
}

export default Card;