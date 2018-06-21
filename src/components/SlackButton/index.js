import React from "react";
import "./styles.scss";
import Icon from "../Icon/index";

export default ({className, iconStyle}) => (
  <a className={`slack-button button is-white ${className}`} target="_blank" href="http://slack.overture.bio/">
    <Icon className="mr2" img="slack" style={{ height: '100%', ...iconStyle }}/>
    <span className="link-magenta slack-button-text">Join us on Slack</span>
  </a>
)
