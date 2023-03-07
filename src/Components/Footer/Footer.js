import React, { Component } from "react";
import "./Footer.css";
import logo2 from "../Homedetails/logog.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
    };
  }
  componentDidUpdate() {
    if (this.props.style !== this.state.style) {
      this.setState({ style: this.props.style });
    }
  }
  render() {
    var isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    let margin = "0px";
    if (isChrome) {
      margin = "20px";
    }
    return (
      <div>
        <div style={this.state.style}>
          <div className="desk-footer">
            <div className="bigcont">
              <div className="footer-container">
                <div className="footer-main">
                  <img
                    src={logo2}
                    style={{ margin: margin }}
                    className="footer-logo2"
                    alt="logo"
                  />
                </div>

                <div className="footer-main-content">
                  <div className="footinf">
                    IIT Dharwad Student Body Elections 2023-24
                  </div>
                </div>
                <div className="listtoreach">
                  <div className="footer-contact-heading">Contact us</div>
                  <div className="footer-contact-list-item">
                    <div>
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      elections@iitdh.ac.in
                    </div>
                  </div>
                  <div className="footer-contact-list-item">
                    <div>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      IIT Dharwad, WALMI Campus, Pb road, near High Court,
                      Karnataka 580011
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="footer-credits">
                Copyright © 2023.
                All Rights Reserved.
              </div>
            </div>
          </div>

          <div className="mob-footer">
            <div className="bigcont">
              <div className="footer-container">
                <div className="footer-main">
                  <img
                    src={logo2}
                    style={{ margin: { margin } }}
                    className="footer-logo2"
                    alt="logo"
                  />
                </div>

                <div className="footer-main-content">
                  <div className="footinf">
                    IIT Dharwad Student Body Elections 2023-24
                  </div>
                </div>
                <div className="listtoreach">
                  <div className="footer-contact-heading">Contact us</div>
                  <div className="footer-contact-list-item">
                    <div>
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      elections@iitdh.ac.in
                    </div>
                  </div>

                  <div className="footer-contact-list-item">
                    <div>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      IIT Dharwad, WALMI Campus, Pb road, near High Court,
                      Karnataka 580011
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="footer-credits">
                Copyright © 2023.
                All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Footer };
