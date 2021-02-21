import React from "react";
import "./Teampage.css";
import Teamcard from "../Card/Teamcard";
import Fade from "react-reveal/Fade";
import teambanner from "./teamban.png"; // with import
import OnImagesLoaded from "react-on-images-loaded";
import { setopacity } from "./../../App";
import disableScroll from 'disable-scroll';

class Teampage extends React.Component {
  constructor(props) {
    super(props);
    setopacity(0);
    window.scrollTo(0, 0);
    disableScroll.on();
    this.props.showLoader();
    this.state = {
      showImages: false,
    };
  }
  show = () => {
    this.props.hideLoader();
    setopacity(1);
    disableScroll.off();
  };
  hide = () => {
    this.props.showLoader();
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    if (this.props.loadContent) this.show();
    else this.hide();
  }
  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
        }}
        timeout={25000}
      >
        <div
          className="pogcont"
          style={{
            opacity: this.props.loadContent ? 1 : 0,
          }}
        >
          <div className="teamdesk">
            <div className="topbannerteam">
              <div className="titlebanteam">
                {" "}
                Team
                <p>Election Council members for 2021-22 Phase - II</p>
              </div>
              <img
                src={teambanner}
                className="topbannerimgteam"
                alt="team banner"
              />
            </div>
          </div>

          <div className="teammobile">
            <div className="topbannerteam">
              <img
                src={teambanner}
                className="topbannerimgteam"
                alt="team banner"
              />

              <div className="titlebanteam">
                {" "}
                Team
                <p>Election Council members for 2021-22 Phase - II.</p>
              </div>
            </div>
          </div>
          <div className="fortheme">
            <div className="conti">
              <div className="headersect">
                Student Election Commission (SEC)
              </div>
              <div className="members">
                <Fade bottom>
                  <Teamcard
                    name1=""
                    name2="Mehul Bose"
                    gitbool="true"
                    imgsrc="https://drive.google.com/uc?id=1NXJYQA2nUo5lS41MavQ_n6SR9CByZwAg"
                    gitlink="https://github.com/Kimi07Fan"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/mehul-bose-456596192/"
                    instabool="true"
                    instalink="https://www.instagram.com/mehul_bose/"
                  />
                  <Teamcard
                    name1=""
                    name2="S U Swakath"
                    imgsrc="https://drive.google.com/uc?id=1IGds7zqgMHhOeRrCqIPxLPPX2aRCvpO4"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/swakath-umamakeshwaran-57b2a717b"
                  />
                  <Teamcard
                    name1=""
                    name2="Soma Siddhartha"
                    gitbool="true"
                    imgsrc="https://drive.google.com/uc?id=1HzYjKcLIcMuhXYjM8vllsyBJC66sviuk"
                    gitlink="https://github.com/Sedherthe"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/soma-siddhartha-a1a540170/"
                  />
                  <Teamcard
                    name1=""
                    name2="Sonu Sourav"
                    gitbool="true"
                    imgsrc="https://parsec.iitdh.ac.in/images/team/sonu.jpg"
                    gitlink="https://github.com/sonusourav"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/sonusourav/"
                  />

                  <Teamcard
                    name1="Sameer"
                    name2="Mohammad"
                    instabool="true"
                    imgsrc="https://drive.google.com/uc?id=1UzfYTZcHU3yNZ6SLiXZcgOdp7RJQqzwt"
                    instalink="https://www.instagram.com/_sameer_.sam/"
                  />

                  <Teamcard
                    name1="Saurabh"
                    name2="Ratnaparkhi"
                    instabool="true"
                    gitbool="true"
                    gitlink="https://github.com/saurabh021120"
                    imgsrc="https://drive.google.com/uc?id=1HIjOOEY_Z2E068ZxWzTYG967O_lHWUxl"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/saurabh-ratnaparkhi-9150731a0/"
                    instalink="https://www.instagram.com/saurabh_ratnaparkhi_/?hl=en"
                  />
                  <Teamcard
                    name1="Mayank Mittal"
                    gitbool="true"
                    gitlink="https://github.com/Mittal9269"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/mayank-mittal-866a1b1a6/"
                    imgsrc="https://drive.google.com/uc?id=1PJ_m9YPionqDFGT-37lpHW-BEGVJZldf"
                  />
                </Fade>
              </div>
              <div className="headersect">Web Ops</div>
              <div className="members">
                <Fade bottom>
                  <Teamcard
                    name1="Peddi"
                    name2="Ashrith Kumar"
                    gitbool="true"
                    imgsrc="https://drive.google.com/uc?id=1MpUsvlytm6yGfFR7XUQ5q9dR0IHqho-b"
                    gitlink="https://github.com/peddiashrith"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/peddiashrith/"
                    instabool="true"
                    instalink="https://www.instagram.com/peddiashrith/"
                  />
                  <Teamcard
                    name1=""
                    name2="Putti Gowtham Sai"
                    imgsrc="https://drive.google.com/uc?id=1enn6iLxEYlO3BHaaS1J07VbRkVdkC2GI"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/gowtham-putti-ba6a611b1/"
                    instabool="true"
                    instalink="https://www.instagram.com/gowtham31m/"
                  />
                  <Teamcard
                    name1=""
                    name2="Omkar Jadhav"
                    gitbool="true"
                    gitlink="https://github.com/IamODJ"
                    imgsrc="https://drive.google.com/uc?id=1et7oznxvNb1PMii9BdmgohYHJrWR_GUD"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/iamodj"
                    instabool="true"
                    instalink="https://www.instagram.com/omkar.exe/"
                  />
                  <Teamcard
                    name1="Sai Sandeep"
                    name2="Bareedu"
                    imgsrc="https://drive.google.com/uc?id=1kXUo7Vm-LfSuQ-tWvg-CRmIxCt3cGjM_"
                    gitbool="true"
                    gitlink="https://github.com/saisandeep19114"
                    linkedbool="true"
                    linkedlink="https://www.linkedin.com/in/sai-sandeep-bareedu-238448118/"
                  />
                </Fade>
              </div>
            </div>
            <div className="bottombanner"></div>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

export default Teampage;
