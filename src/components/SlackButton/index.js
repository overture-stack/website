import React from "react";
import "./styles.scss";
import Icon from "../Icon/index";

export default ({className}) => (
  <a className={`slack-button button is-white ${className}`} target="_blank" href="http://slack.overture.bio/">
    <Icon className="mr2 slack-button-icon" img="slack" style={{height: '100%'}}/>
    <span className="link-magenta slack-button-text">Join us on Slack</span>
  </a>
)
