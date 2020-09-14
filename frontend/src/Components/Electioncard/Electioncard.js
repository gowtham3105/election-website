import React from "react";
import "./Electioncard.css";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import votebanner from "./votepage.png"; // with import

import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";


class Electioncard extends React.Component {
  constructor() {
    super();
    this.candbutton = this
            .candbutton
            .bind(this);
    this.state = {
      opened: false,
    };
  }
      candbutton() {
        console.log('tapped');
    }

  render() {
    return (
        <div>
          <div className="topbanner">
          <div className="titleban"> Voting page
          <p>Vote for the following positions according to your voting rights.</p> 
          </div>
          <img src={votebanner} className="topbannerimg" />
        </div>
      <div className="cont">
  
        <CollapsibleComponent>
        <div>
          <CollapsibleHead className="elecbar">
            <div className="elecname">General Seceratory Sports</div>
          </CollapsibleHead>
          <CollapsibleContent>
            <Fade top>
              <div className="eleccard">
                <div className="candidate" data-index="1" onClick={this.candbutton}>
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname">Omkar Dnyaneshwar Jadhav</div>
                  <div className="lock"></div>
                </div>
                <div className="candidate">
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname"></div>
                  <div className="btnlock"></div>
                </div>
                <div className="candidate">
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname"></div>
                  <div className="btnlock"></div>
                </div>
              </div>
            </Fade>
          </CollapsibleContent>
          </div>
          <div>
          <CollapsibleHead className="elecbar">
            <div className="elecname">Election 1</div>
            <div className="elecrights"></div>
          </CollapsibleHead>
          <CollapsibleContent>
            <Fade top>
              <div className="eleccard">
                <div className="candidate">
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname">Omkar Dnyaneshwar Jadhav</div>
                  <div className="lock unlocked"></div>
                </div>
                <div className="candidate">
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname"></div>
                  <div className="btnlock"></div>
                </div>
                <div className="candidate">
                  <div className="candimg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                      alt="Albert Einstein"
                    />
                  </div>
                  <div className="candname"></div>
                  <div className="btnlock"></div>
                </div>
              </div>
            </Fade>
          </CollapsibleContent>
          </div>
          <CollapsibleHead className="elecbar">
            <div className="elecname">Election 2</div>
            <div className="elecrights"></div>
          </CollapsibleHead>
          <CollapsibleContent>
            <div className="eleccard">
              <div className="candidate">
                <div className="candimg"></div>
                <div className="candname"></div>
                <div className="btnlock"></div>
              </div>
            </div>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      </div>
    );
  }
}

export default Electioncard;
