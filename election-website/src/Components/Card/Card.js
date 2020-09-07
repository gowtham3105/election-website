import React from 'react';
import './Card.css'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import {showModel} from './../../App.js'
const Card = ({ name, email, id }) => {
    return (

      <div className="card">
      <Reveal effect="animtop">
        <div className="ds-top" />
      </Reveal>
      <Reveal effect="animprof">
        <div className="avatar-holder">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />
        </div>
      </Reveal>

      <Fade left>
           <div className="name">
          <a id='namex' href='#time'>{name}</a><br/>
          <a id='dept' href='#time'>3rd year,CSE dept.</a><br/>
          <a id='email' href='#time'><i class="fa fa-envelope" aria-hidden="true"></i> {email}</a><br/>
          </div>
       </Fade>
        <div className="buttonhold">
          <button class="Button_Secondary" ><i class="fa fa-file" aria-hidden="true"></i> Manifesto</button>
          <button class="Button_Secondary" onClick={() => { showModel(true, 'https://www.youtube.com/watch?v=qmN1Gf8rRc8')}}><i class="fa fa-youtube-play" aria-hidden="true"></i> Intro</button>
        </div>
      </div>
    );
}

export default Card;