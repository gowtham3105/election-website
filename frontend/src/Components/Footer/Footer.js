import React from 'react';
import './Footer.css'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (

      <div className="footer">
      <div className="footerleft">
             <img src="https://oss2019.github.io/images/oss_logo.png" alt="OSS logo" />
      </div>
      <div className="footerright">
      <p>Copyright © 2020 All Rights Reserved <br/>  OSS, IIT Dharwad </p>
      </div>
      </div>
    );
}

export default Footer;