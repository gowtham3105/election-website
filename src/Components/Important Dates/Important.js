import React, { Component } from "react";
import "./Important.css";
import Fade from "react-reveal/Fade";
import OnImagesLoaded from "react-on-images-loaded";
import dateimpImg from "./dateimp.jpeg";
import plus from "./plus.jpeg";
class Important extends Component {
  constructor(props) {
    super(props);
    this.state = { showImages: false };
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <div
          className="importantDates"
          style={{ opacity: this.state.showImages ? 1 : 0 }}
        >
          <div className="teamdesk">
            <div className="topbannerteam_imp">
              <div className="titlebanteam">
                {" "}
                Important Dates
                <div className="subhead">
                  Deadlines for Student Council Elections 2020-21. <br />
                  <div className="markdate">
                    Mark My Calander
                    <a
                      href="https://calendar.google.com/calendar/u/0?cid=Y185Ym9rMGQ3Z2JmOGRrOG0zNTcydjdwZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                      style={{ margin: "10px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={plus}
                        alt="plus"
                        width="10%"
                        className="markdateimg"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <img
                width="70%"
                src={dateimpImg}
                className="topbannerimgteam"
                alt="dateimp.jpeg"
              />
            </div>
          </div>

          <div className="teammobile">
            <div className="topbannerteam_imp">
              <img
                width="70%"
                src={dateimpImg}
                className="topbannerimgteam"
                alt="dateimp.jpeg"
              />

              <div className="titlebanteam">
                {" "}
                Important Dates
                <div className="subhead">
                  Deadlines for Student Council Elections 2020-21. <br />
                  <div className="markdate">
                    Mark My Calander
                    <a
                      href="https://calendar.google.com/calendar/u/0?cid=Y185Ym9rMGQ3Z2JmOGRrOG0zNTcydjdwZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                      style={{ margin: "10px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={plus}
                        alt="plus"
                        width="10%"
                        className="markdateimg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timelineinfo">
            <ul className="timeline">
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="hexa"></span>
                    <Fade left>
                      <span className="flag">Nomination Day</span>
                      <span className="time-wrapper">
                        <span className="time">Sep 1</span>
                      </span>
                    </Fade>
                  </div>
                  <Fade left>
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
                    <Fade right>
                      <span className="flag">Campaign Day</span>
                      <span className="time-wrapper">
                        <span className="time">Sep 2</span>
                      </span>
                    </Fade>
                  </div>
                  <Fade right>
                    <div className="desc">Campaigning Starts</div>
                  </Fade>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <Fade left>
                      <span className="hexa"></span>
                      <span className="flag">Voting Day</span>
                      <span className="time-wrapper">
                        <span className="time">Sep 3</span>
                      </span>
                    </Fade>
                  </div>
                  <Fade left>
                    <div className="desc">Voting starts at 10Am</div>
                  </Fade>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="hexa"></span>
                    <Fade right>
                      <span className="flag">Results Day</span>
                      <span className="time-wrapper">
                        <span className="time">Sep 4</span>
                      </span>
                    </Fade>
                  </div>
                  <Fade right>
                    <div className="desc">Elections will be Declared</div>
                  </Fade>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

export default Important;
