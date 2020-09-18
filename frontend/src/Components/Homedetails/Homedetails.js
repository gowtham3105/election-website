import React from "react";
import "./Homedetails.css";
import logo from "./logog.png"; // with import
import logoweb from "./fullart.png"; // with import
import logowebx from "./art.png"; // with import
import CountUp from "react-countup";
import bottomimg from "./bck.png"; // with import
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import VisibilitySensor from "react-visibility-sensor";
import OnImagesLoaded from 'react-on-images-loaded';

class Homedetails extends React.Component {
      constructor(props) {
            super(props);
            this.props.showLoader();
    this.state={
            showImages: false,

    }
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
      <div className="pogcont" style={{ opacity: this.state.showImages ? 1 : 0 }}>
                        <div className="show-mobile">
                              <div className="imgshow">
                                    <img className="logoimg" src={logo} />
                                    <div className="infotxt">
                                          <a>IIT Dharwad</a> <br /> Student
                                          Council Elections
                                    </div>
                                    <img
                                          className="bottomimg"
                                          src={bottomimg}
                                    />
                              </div>
                              <div className="homeinfo">
                                    <Fade>
                                          <div className="info">
                                                <a className="tallinfo">
                                                      <CountUp
                                                            end={59}
                                                            duration={3}
                                                            redraw={true}
                                                      >
                                                            {({
                                                                  countUpRef,
                                                                  start,
                                                            }) => (
                                                                  <VisibilitySensor
                                                                        onChange={
                                                                              start
                                                                        }
                                                                        delayedCall
                                                                  >
                                                                        <span
                                                                              ref={
                                                                                    countUpRef
                                                                              }
                                                                        />
                                                                  </VisibilitySensor>
                                                            )}
                                                      </CountUp>{" "}
                                                      <i
                                                            className="fa fa-flag"
                                                            aria-hidden="true"
                                                      ></i>
                                                </a>
                                          </div>
                                    </Fade>
                                    <Fade>
                                          <div className="info">
                                                <a className="tallinfo">
                                                      <CountUp
                                                            end={100}
                                                            duration={3}
                                                            redraw={true}
                                                      >
                                                            {({
                                                                  countUpRef,
                                                                  start,
                                                            }) => (
                                                                  <VisibilitySensor
                                                                        onChange={
                                                                              start
                                                                        }
                                                                        delayedCall
                                                                  >
                                                                        <span
                                                                              ref={
                                                                                    countUpRef
                                                                              }
                                                                        />
                                                                  </VisibilitySensor>
                                                            )}
                                                      </CountUp>{" "}
                                                      <i
                                                            class="fa fa-user"
                                                            aria-hidden="true"
                                                      ></i>
                                                </a>
                                          </div>
                                    </Fade>
                                    <Fade>
                                          <div className="info">
                                                <a className="tallinfo">
                                                      <CountUp
                                                            end={10}
                                                            duration={3}
                                                            redraw={true}
                                                      >
                                                            {({
                                                                  countUpRef,
                                                                  start,
                                                            }) => (
                                                                  <VisibilitySensor
                                                                        onChange={
                                                                              start
                                                                        }
                                                                        delayedCall
                                                                  >
                                                                        <span
                                                                              ref={
                                                                                    countUpRef
                                                                              }
                                                                        />
                                                                  </VisibilitySensor>
                                                            )}
                                                      </CountUp>
                                                      :00 am,{" "}
                                                </a>
                                          </div>
                                    </Fade>
                                    <Fade>
                                          <div className="info">
                                                <a className="tallinfo">
                                                      <CountUp
                                                            end={5}
                                                            duration={3}
                                                            redraw={true}
                                                      >
                                                            {({
                                                                  countUpRef,
                                                                  start,
                                                            }) => (
                                                                  <VisibilitySensor
                                                                        onChange={
                                                                              start
                                                                        }
                                                                        delayedCall
                                                                  >
                                                                        <span
                                                                              ref={
                                                                                    countUpRef
                                                                              }
                                                                        />
                                                                  </VisibilitySensor>
                                                            )}
                                                      </CountUp>
                                                      /
                                                      <CountUp
                                                            end={6}
                                                            duration={2}
                                                            redraw={true}
                                                      >
                                                            {({
                                                                  countUpRef,
                                                                  start,
                                                            }) => (
                                                                  <VisibilitySensor
                                                                        onChange={
                                                                              start
                                                                        }
                                                                        delayedCall
                                                                  >
                                                                        <span
                                                                              ref={
                                                                                    countUpRef
                                                                              }
                                                                        />
                                                                  </VisibilitySensor>
                                                            )}
                                                      </CountUp>
                                                      /2020{" "}
                                                      <i
                                                            class="fa fa-calendar-check-o"
                                                            aria-hidden="true"
                                                      ></i>
                                                </a>
                                          </div>
                                    </Fade>
                              </div>
                        </div>

                        <div className="hide-mobile">
                              <div
                                    className="imgshow"
                                    style={{
                                          backgroundImage:
                                                "url(" + logowebx + ")",
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                    }}
                              >
                                    <div className="formargin">
                                          <img className="logoimg" src={logo} />
                                    </div>
                                    <div></div>
                                    <div className="infotxt">
                                          <a>IIT Dharwad</a> <br /> Student
                                          Council Elections
                                    </div>
                              </div>
                              <div className="homeinfo">
                                    <div className="info">
                                          <a className="tallinfo">
                                                <CountUp
                                                      end={59}
                                                      duration={3}
                                                      redraw={true}
                                                >
                                                      {({
                                                            countUpRef,
                                                            start,
                                                      }) => (
                                                            <VisibilitySensor
                                                                  onChange={
                                                                        start
                                                                  }
                                                                  delayedCall
                                                            >
                                                                  <span
                                                                        ref={
                                                                              countUpRef
                                                                        }
                                                                  />
                                                            </VisibilitySensor>
                                                      )}
                                                </CountUp>{" "}
                                                <i
                                                      class="fa fa-flag"
                                                      aria-hidden="true"
                                                ></i>
                                          </a>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <a className="tallinfo">
                                                <CountUp
                                                      end={100}
                                                      duration={3}
                                                      redraw={true}
                                                >
                                                      {({
                                                            countUpRef,
                                                            start,
                                                      }) => (
                                                            <VisibilitySensor
                                                                  onChange={
                                                                        start
                                                                  }
                                                                  delayedCall
                                                            >
                                                                  <span
                                                                        ref={
                                                                              countUpRef
                                                                        }
                                                                  />
                                                            </VisibilitySensor>
                                                      )}
                                                </CountUp>{" "}
                                                <i
                                                      class="fa fa-user"
                                                      aria-hidden="true"
                                                ></i>
                                          </a>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <a className="tallinfo">
                                                <CountUp
                                                      end={10}
                                                      duration={3}
                                                      redraw={true}
                                                >
                                                      {({
                                                            countUpRef,
                                                            start,
                                                      }) => (
                                                            <VisibilitySensor
                                                                  onChange={
                                                                        start
                                                                  }
                                                                  delayedCall
                                                            >
                                                                  <span
                                                                        ref={
                                                                              countUpRef
                                                                        }
                                                                  />
                                                            </VisibilitySensor>
                                                      )}
                                                </CountUp>
                                                :00 am
                                          </a>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <a className="tallinfo">
                                                <CountUp
                                                      end={5}
                                                      duration={3}
                                                      redraw={true}
                                                >
                                                      {({
                                                            countUpRef,
                                                            start,
                                                      }) => (
                                                            <VisibilitySensor
                                                                  onChange={
                                                                        start
                                                                  }
                                                                  delayedCall
                                                            >
                                                                  <span
                                                                        ref={
                                                                              countUpRef
                                                                        }
                                                                  />
                                                            </VisibilitySensor>
                                                      )}
                                                </CountUp>
                                                /
                                                <CountUp
                                                      end={6}
                                                      duration={2}
                                                      redraw={true}
                                                >
                                                      {({
                                                            countUpRef,
                                                            start,
                                                      }) => (
                                                            <VisibilitySensor
                                                                  onChange={
                                                                        start
                                                                  }
                                                                  delayedCall
                                                            >
                                                                  <span
                                                                        ref={
                                                                              countUpRef
                                                                        }
                                                                  />
                                                            </VisibilitySensor>
                                                      )}
                                                </CountUp>
                                                /2020{" "}
                                                <i
                                                      class="fa fa-calendar-check-o"
                                                      aria-hidden="true"
                                                ></i>
                                          </a>
                                          <br />
                                    </div>
                                    <div className="emptydiv"></div>
                              </div>
                              <Fade delay={300}>
                                    <div className="markcal">
                                          Mark your calender!
                                    </div>
                              </Fade>
                        </div>
                  </div>
                  </OnImagesLoaded>
            );
      }
}

export default Homedetails;
