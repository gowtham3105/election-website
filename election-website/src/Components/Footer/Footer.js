import React from "react";
import "./Footer.css";

const Footer = ({style}) => {
  return (
    <div style={style}>
      <div className="desk-footer">
        <div className="bigcont">
          <div className="footer-container">
            <div className="footer-main">
              <img src="oss.png" className="footer-logo2" alt="oss logo" />
            </div>

            <div className="footer-main-content">
              <div>
                Student Council Elections is an annual event .... add more info
              </div>
            </div>
            <div className="listtoreach">
              <div className="footer-contact-heading">Contact us</div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  anyemail@iitdh.ac.in
                </div>
              </div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-phone" aria-hidden="true"></i> +91 12345
                  67890
                </div>
              </div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> IIT
                  Dharwad, WALMI Campus, Pb road, near High Court, Karnataka
                  580011
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="footer-credits">
            Copyright © 2020 - OSS, Indian Institute of Technology, Dharwad. All
            Rights Reserved.
          </div>
        </div>
      </div>

      <div className="mob-footer">
        <div className="bigcont">
          <div className="footer-container">
            <div className="footer-main">
              <img src="oss.png" className="footer-logo2" alt="oss logo" />
            </div>

            <div className="footer-main-content">
              <div>
                Student Council Elections is an annual event .... add more info
              </div>
            </div>
            <div className="listtoreach">
              <div className="footer-contact-heading">Contact us</div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  anyemail@iitdh.ac.in
                </div>
              </div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-phone" aria-hidden="true"></i> +91 12345
                  67890
                </div>
              </div>
              <div className="footer-contact-list-item">
                <div>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> IIT
                  Dharwad, WALMI Campus, Pb road, near High Court, Karnataka
                  580011
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="footer-credits">
            Copyright © 2020 - OSS, Indian Institute of Technology, Dharwad. All
            Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
