import React from "react";
import "./Homedetails.css";
import logo from "./logog.png"; // with import
import logowebx from "./gg.png"; // with import
import Renderer from "../Renderer";
import Countdown from "react-countdown";
import bottomimg from "./bck.png"; // with import
import Fade from "react-reveal/Fade";
import OnImagesLoaded from "react-on-images-loaded";
import Ticker from "../Ticker.js";
import { setopacity } from "./../../App";
import disableScroll from 'disable-scroll';

class Homedetails extends React.Component {
  constructor(props) {
    super(props);
    this.props.showLoader();
    window.scrollTo(0, 0);
    disableScroll.on();
    setopacity(0);
    this.state = {
      showImages: false,
      linkLoaded: false,
      showelec: true,
      showcand: true,
      showtime: true,
      showdate: true,
      showmonth: true,
      renderobj: "",
      loadContent: this.props.loadContent,
    };
  }

  componentDidMount() {

    let condcomp;
    if (Number(this.props.voteStartTime) > 0) {
      condcomp = (
        <div>
          <Fade delay={300}>
            <div
              className="markcal"
              style={{
                fontSize: "5.5vh",
              }}
            >
              Mark your calender!
            </div>
          </Fade>
          <div className="formg">
            <Countdown
              date={new Date(this.props.dateNow).getTime()}
              renderer={Renderer}
            />
          </div>
        </div>
      );
    } else if (Number(this.props.voteEndTime) > 0) {
      condcomp = (
        <div>
          <div
            className="markcal"
            style={{
              fontSize: "4vh",
            }}
          >
            Elections in progress, Log In with the institute email-id <br />
            and head to the Voting tab!
          </div>
          <Countdown
            date={new Date(this.props.dateNow).getTime() + 57600000}
            renderer={Renderer}
          />
        </div>
      );
    } else if (Number(this.props.resultTime) > 0) {
      condcomp = (
        <div>
          <div
            className="markcal"
            style={{
              fontSize: "4.5vh",
            }}
          >
            Phase-II Elections are over, <br /> check Schedule tab for further
            updates!
          </div>
        </div>
      );
    } else {
      condcomp = (
        <div>
          <div
            className="markcal"
            style={{
              fontSize: "4.5vh",
            }}
          >
            Phase-II Election results have been declared,
            <br /> check the Results tab for further details.{" "}
          </div>
        </div>
      );
    }
    this.setState({
      renderobj: condcomp,
      loadContent: this.props.loadContent,
    });
  }
  componentDidUpdate() {
    if (this.props.loadContent !== this.state.loadContent) {
      let condcomp;

      if (Number(this.props.voteStartTime) > 0) {
        condcomp = (
          <div>
            <Fade delay={300}>
              <div
                className="markcal"
                style={{
                  fontSize: "5.5vh",
                }}
              >
                Mark your calender!
              </div>
            </Fade>
            <div className="formg">
              <Countdown
                date={new Date(this.props.dateNow).getTime()}
                renderer={Renderer}
                onComplete={() => {
                  this.reloadPage();
                }}
              />
            </div>
          </div>
        );
      } else if (Number(this.props.voteEndTime) > 0) {
        //  console.log("w");
        condcomp = (
          <div>
            <div
              className="markcal"
              style={{
                fontSize: "4vh",
              }}
            >
              Elections in progress, Log In with the institute email-id <br />
            and head to the Voting tab!
            </div>
            <Countdown
              date={new Date(this.props.dateNow).getTime() + 57600000}
              renderer={Renderer}
              onComplete={() => {
                this.reloadPage();
              }}
            />
          </div>
        );
      } else if (Number(this.props.resultTime) > 0) {
        // console.log("e");

        condcomp = (
          <div>
            <div
              className="markcal"
              style={{
                fontSize: "4.5vh",
              }}
            >
              Phase-II Elections are over, <br /> check Schedule tab for further
              updates!
            </div>
          </div>
        );
      } else {
        //  console.log("r");

        condcomp = (
          <div>
            <div
              className="markcal"
              style={{
                fontSize: "4.5vh",
              }}
            >
              Phase-II Election results have been declared,
              <br /> check the Results tab for further details.{" "}
            </div>
          </div>
        );
      }
      this.setState({
        renderobj: condcomp,
        loadContent: this.props.loadContent,
      });
    }
  }
  render() {
    var isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    let clr = "#e9d8ff";
    if (isChrome) {
      clr = "#eadfff";
    }

    return (
      <div>
        {this.props.loadContent ? (
          <OnImagesLoaded
            onLoaded={() => {
              this.setState({ showImages: true });
              setopacity(1);
              this.props.hideLoader();
              disableScroll.off();
            }}
            onTimeout={() => {
              this.setState({ showImages: true });
              setopacity(1);
              this.props.hideLoader();
              disableScroll.off();
            }}
            timeout={25000}
          >
            <div
              className="pogcont"
              style={{ opacity: this.state.showImages ? 1 : 0 }}
            >
              <div className="show-mobile">
                <div className="imgshow">
                  <img className="logoimg" src={logo} alt="logo" />
                  <div className="infotxt">
                    Student
                    <br /> Elections
                  </div>
                  <img className="bottomimg" alt="Banner" src={bottomimg} />
                </div>
                <div className="homeinfo">
                  <Fade>
                    <div className="info">
                      <div className="tallinfo">
                        <Ticker className="count" end={38} duration={3} />{" "}
                        <i className="fa fa-flag" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="info">
                      <div className="tallinfo">
                        <Ticker className="count" end={64} duration={3} />{" "}
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="info">
                      <div className="tallinfo">
                        <Ticker className="count" end={8} duration={3} />
                        :00 AM,{" "}
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="info">
                      <div className="tallinfo">
                        <Ticker className="count" end={13} duration={3} />
                        /
                        <Ticker className="count" end={2} duration={3} />
                        /2021{" "}
                        <i
                          className="fa fa-calendar-check-o"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </Fade>
                  <br />
                  <div className="emptydiv">{this.state.renderobj}</div>
                </div>
              </div>

              <div className="hide-mobile">
                <div className="imgshow" style={{ backgroundColor: clr }}>
                  <div
                    style={{
                      backgroundImage: "url(" + logowebx + ")",
                      backgroundPosition: "left center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      marginTop: "15vh",
                      marginRight: "-2vw",
                    }}
                  ></div>
                  <div className="infotxt">
                    <div id="til">Student Elections</div> <br />
                    Phase-II IIT Dharwad Student Body Elections 2021-22
                  </div>
                </div>
                <div className="homeinfo">
                  <div className="info">
                    <div className="tallinfo">
                      <Ticker className="count" end={38} duration={3} />{" "}
                      <i className="fa fa-flag" aria-hidden="true"></i>
                    </div>
                    <br />
                  </div>

                  <div className="info">
                    <div className="tallinfo">
                      <Ticker className="count" end={64} duration={3} />{" "}
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <br />
                  </div>

                  <div className="info">
                    <div className="tallinfo">
                      <Ticker className="count" end={8} duration={3} />
                      :00 AM
                    </div>
                    <br />
                  </div>

                  <div className="info">
                    <div className="tallinfo">
                      <Ticker className="count" end={13} duration={3} />
                      /
                      <Ticker className="count" end={2} duration={3} />
                      /2021{" "}
                      <i
                        className="fa fa-calendar-check-o"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <br />
                  </div>
                  <div className="emptydiv">{this.state.renderobj}</div>
                </div>
              </div>
            </div>
          </OnImagesLoaded>
        ) : (
            <div style={{ minHeight: "110vh" }}></div>
          )}
      </div>
    );
  }
}

export default Homedetails;
