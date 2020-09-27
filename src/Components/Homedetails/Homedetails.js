import React from "react";
import "./Homedetails.css";
import logo from "./logog.png"; // with import
import logoweb from "./fullart.png"; // with import
import logowebx from "./homepagebanner.png"; // with import
import CountUp from "react-countup";
import bottomimg from "./bck.png"; // with import
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import VisibilitySensor from "react-visibility-sensor";
import OnImagesLoaded from 'react-on-images-loaded';
import Ticker from "../Ticker.js"

class Homedetails extends React.Component {
      constructor(props) {
            super(props);
            this.props.showLoader();
    this.state={
            showImages: false,
            showelec :true,
            showcand: true,
            showtime:true,
            showdate:true,
            showmonth:true,
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
                                                      <Ticker className="count" end={59} duration={3} />{" "}
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
                                                      <Ticker className="count" end={200} duration={3} />{" "}
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
                                                      <Ticker className="count" end={10} duration={3} />
                                                      :00 am,{" "}
                                                </a>
                                          </div>
                                    </Fade>
                                    <Fade>
                                          <div className="info">
                                                <a className="tallinfo">
                                                     <Ticker className="count" end={5} duration={3} />
                                                      /
                                                      <Ticker className="count" end={6} duration={3} />
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
                              <div className="imgshow">
                                    
                                    <div style={{
                                          backgroundImage:
                                                "url("+ logowebx +")",
                                          backgroundPosition: "bottom",
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                          width:"100%",
                                    }}></div>
                                    <div className="infotxt">
                                          <a>Student Council Elections</a> <br /> 
                                          Some sample text should go here.
                                    </div>
                              </div>
                              <div className="homeinfo">
                                    <div className="info">
                                          <div className="tallinfo">
                                          <Ticker className="count" end={59} duration={3} />{" "}

                                                <i
                                                      class="fa fa-flag"
                                                      aria-hidden="true"
                                                ></i>
                                          </div>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <div className="tallinfo">
                                          <Ticker className="count" end={100} duration={3}/>{" "}
                                                <i
                                                      class="fa fa-user"
                                                      aria-hidden="true"
                                                ></i>
                                          </div>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <div className="tallinfo">
                                          <Ticker className="count" end={10} duration={3} />:00 am
                                          </div>
                                          <br />
                                    </div>

                                    <div className="info">
                                          <div className="tallinfo">
                                                <Ticker className="count" end={21} duration={3} />
                                                /
                                                <Ticker className="count" end={5} duration={3} />
                                                /2020{" "}
                                                <i
                                                      class="fa fa-calendar-check-o"
                                                      aria-hidden="true"
                                                ></i>
                                          </div>
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
