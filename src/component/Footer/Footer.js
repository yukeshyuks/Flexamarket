import React from "react";

//material UI imports
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./Footer.css";

function Footer() {
  return (
    {/* BottomNavigation component is imported from the material UI */}
      <BottomNavigation>
    
    {/* BottomNavigationAction component is imported from the material UI */}    
        <BottomNavigationAction
          className="foot"
          href="https://www.facebook.com/people/Flexa-Grps/100074660825435/"
          label="Facebook"
          icon={<FacebookIcon style={{ fill: "#3b5998" }} />}
        />
        <BottomNavigationAction
          className="foot"
          href="https://twitter.com/FlexaMarket"
          label="Twitter"
          icon={<TwitterIcon style={{ fill: "#1DA1F2" }} />}
        />
        <BottomNavigationAction
          className="foot"
          href="https://www.instagram.com/flexamarket/"
          label="Instagram"
          icon={<InstagramIcon style={{ fill: "#C13584" }} />}
        />
        <BottomNavigationAction
          className="foot"
          href="https://www.youtube.com/channel/UCDom-DRj2U_TnVvKyxlBHFQ"
          label="YouTube"
          icon={<YouTubeIcon style={{ fill: "#c4302b" }} />}
        />
      </BottomNavigation>
  );
}

export default Footer;
