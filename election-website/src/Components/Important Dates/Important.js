import React, { Component } from "react";
import "./Important.css";
import Fade from "react-reveal/Fade";

class Important extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="importantDates">
        <hr style={{ borderColor: "#6f2891", width: "80%" }} />
        <div className="inportanthead">Important Dates</div>
        <hr style={{ borderColor: "#6f2891", width: "80%" }} />
        <ul className="timeline">
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <Fade>
                  <span className="flag">Nomination Day</span>
                  <span className="time-wrapper">
                    <span className="time">Sep 1</span>
                  </span>
                </Fade>
              </div>
              <Fade>
                <div className="desc">
                  Candidates should fill the form and enroll for nomination
                </div>
              </Fade>
            </div>
          </li>
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <Fade>
                  <span className="flag">Campaign Day</span>
                  <span className="time-wrapper">
                    <span className="time">Sep 2</span>
                  </span>
                </Fade>
              </div>
              <Fade>
                <div className="desc">Campaigning Starts</div>
              </Fade>
            </div>
          </li>
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <Fade>
                  <span className="hexa"></span>
                  <span className="flag">Voting Day</span>
                  <span className="time-wrapper">
                    <span className="time">Sep 3</span>
                  </span>
                </Fade>
              </div>
              <Fade>
                <div className="desc">Voting starts at 10Am</div>
              </Fade>
            </div>
          </li>
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <Fade>
                  <span className="flag">Results Day</span>
                  <span className="time-wrapper">
                    <span className="time">Sep 4</span>
                  </span>
                </Fade>
              </div>
              <Fade>
                <div className="desc">Elections will be Declared</div>
              </Fade>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Important;
