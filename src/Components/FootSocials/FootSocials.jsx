import React from "react";
import "./Footsocials.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const FootSocials = () => {
  return (
    <div className="foot_socials">
      <div className="socials__icons">
        <span>Follow US: </span>
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <div className="socials__disclaimer">
        <p>
          <a href="#">Privacy Policy</a> | Copyrights 2020 © Serosoft Solutions
          Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FootSocials;
