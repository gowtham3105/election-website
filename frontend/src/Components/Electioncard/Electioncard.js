import React from 'react';
import './Electioncard.css'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";

const handler = function(e){
    console.log(e.target.getAttribute("data-index")); 
    
};

class Electioncard extends React.Component { 
    constructor() {
    super()
    this.state = {
      opened:false
    }
  }





render() {
    return (
      <div id="cont">
       <CollapsibleComponent>
        <CollapsibleHead className="elecbar" data-index="1" onClick={ handler }>
          <div className="elecname">General Seceratory Sports</div>
          <div className="elecrights"></div>
        </CollapsibleHead>
        <CollapsibleContent>
        <Fade top>
        <div className="eleccard">
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />
            </div>
            <div className="candname">
            Omkar Dnyaneshwar Jadhav
            </div>
            <div className="lock">
            </div>
          </div>
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />

            </div>
            <div className="candname">
            </div>
            <div className="btnlock">
            </div>
          </div>
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />

            </div>
            <div className="candname">
            </div>
            <div className="btnlock">
            </div>
          </div>
        </div>
        </Fade>
        </CollapsibleContent>
         <CollapsibleHead className="elecbar" data-index="1" onClick={ handler }>
          <div className="elecname">Election 1</div>
          <div className="elecrights"></div>
        </CollapsibleHead>
        <CollapsibleContent>
        <Fade top>
        <div className="eleccard">
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />
            </div>
            <div className="candname">
            Omkar Dnyaneshwar Jadhav
            </div>
            <div className="lock unlocked">
            </div>
          </div>
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />

            </div>
            <div className="candname">
            </div>
            <div className="btnlock">
            </div>
          </div>
          <div className="candidate">
            <div className="candimg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />

            </div>
            <div className="candname">
            </div>
            <div className="btnlock">
            </div>
          </div>
        </div>
        </Fade>
        </CollapsibleContent>
        <CollapsibleHead className="elecbar">
          <div className="elecname">Election 2</div>
          <div className="elecrights"></div>
        </CollapsibleHead>
        <CollapsibleContent>
        <div className="eleccard">
          <div className="candidate">
            <div className="candimg">
            </div>
            <div className="candname">
            </div>
            <div className="btnlock">
            </div>
          </div>
        </div>
        </CollapsibleContent>
      </CollapsibleComponent>
</div>
    );
  }
}

export default Electioncard;