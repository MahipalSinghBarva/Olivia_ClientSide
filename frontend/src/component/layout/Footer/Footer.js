import React from "react";
import playStore from "../../../image/playstore.png";
import appStore from "../../../image/Appstore.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>Downloade our App</h4>
        {/* <p>Downloade APP for Andriod and IOS</p> */}
        <img src={playStore} alt="playstore"/>
        <img src={appStore} alt="appstore"/>
      </div>

      <div className="midFooter">
        <h1>Olivia-EStore</h1>
        <p>High Quailty is our first priority</p>
        <p>Copyright 2021 &copy; MeMahipalSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;
