import React from 'react';
import './Homedetails.css'
import logo from './logog.png'; // with import
import logoweb from './fullart.png'; // with import

import bottomimg from './bck.png'; // with import

import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
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
      <Bounce top>
      <div className="info">
      <a className="tallinfo">59 <i className="fa fa-flag" aria-hidden="true"></i></a>
      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
      <a className="tallinfo">200 <i class="fa fa-user" aria-hidden="true"></i></a>
      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
      <a className="tallinfo">10:00 am, </a>
      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
      <a className="tallinfo">1/02/2020 <i class="fa fa-calendar-check-o" aria-hidden="true"></i></a>
      </div>
      </Bounce>
      </div>
      </div>

      <div className='hide-mobile'>
       <div className='imgshow'>
       <div className='formargin'>
             <img className='logoimg' src={logo}/>
            <div className='infotxt'><a>IIT Dharwad</a> <br/> Student Council Elections</div>

      </div>
      <img className='bottomimg' src={logoweb}/>

       </div>
      <div className="homeinfo">
      <Bounce top>
      <div className="info">
            <a className="tallinfo">30 <i class="fa fa-flag" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Elections</a>

      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
            <a className="tallinfo">50 <i class="fa fa-user" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Candidates</a>

      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
      <a className="tallinfo">10:00 am</a><br/>
      <a className="smallinfo">Time</a>

      </div>
      </Bounce>
      <Bounce top>
      <div className="info">
            <a className="tallinfo">1/02/2020 <i class="fa fa-calendar-check-o" aria-hidden="true"></i></a><br/>
            <a className="smallinfo">Date</a>

      </div>
      </Bounce>
      </div>
              <Zoom bottom>
             <div className='markcal'>Mark your calender!</div>
            </Zoom>
      </div>

      </div>
    );
}

export default Homedetails;