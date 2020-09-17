import React from 'react';
import './Homedetails.css'
import logo from './logog.png'; // with import
import bottomimg from './bck.png'; // with import

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
const Homedetails = () => {
    return (
      <div>
      <div className='show-mobile'>
      <div className='imgshow'>
      <img className='logoimg' src={logo}/>
      <div className='infotxt'><a>IIT Dharwad</a> <br/> Student Council Elections</div>
      <img className='bottomimg' src={bottomimg}/>
       </div>
      <div className="homeinfo">
      <Fade top>
      <div className="info">Over
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      <a className="tallinfo">59 <i className="fa fa-flag" aria-hidden="true"></i></a> elections,
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      To be contested by
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      <a className="tallinfo">200 <i className="fa fa-user" aria-hidden="true"></i></a> candidates.
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      It all starts at
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      <a className="tallinfo">10:00 am, </a>
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      <a className="tallinfo">1/02/2020 <i className="fa fa-calendar-check-o" aria-hidden="true"></i></a>
      </div>
      </Fade>
      <Fade top>
      <div className="info">
      See you there!
      </div>
      </Fade>
      </div>
      </div>

      <div className='hide-mobile'>
      <div className="homeinfo">
      <Fade top>
      <div className="info">
            <a className="tallinfo">30 <i className="fa fa-flag" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Elections</a>

      </div>
      </Fade>
      <Fade top>
      <div className="info">
            <a className="tallinfo">50 <i className="fa fa-user" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Candidates</a>

      </div>
      </Fade>
      <Fade top>
      <div className="info">
      <a className="tallinfo">10:00 am</a><br/>
      <a className="smallinfo">Time</a>

      </div>
      </Fade>
      <Fade top>
      <div className="info">
            <a className="tallinfo">1/02/2020 <i className="fa fa-calendar-check-o" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Date</a>

      </div>
      </Fade>
      </div>
      </div>

      </div>
    );
}

export default Homedetails;