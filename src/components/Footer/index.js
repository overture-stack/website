/**
 * Declarative footer. Loops over links object and spit out routes. 
 */
import React from "react";
import { Link } from "gatsby-link";
import "./styles.scss";
import logo from "./logo.svg";
import Icon from "../Icon/index";

const links = {
  Core: {
    Ego: {
      link: "/products/ego",
      icon: null,
      newTab: false,
      className: "",
    },
    Score: {
      link: "/products/score",
      icon: null,
      newTab: false,
      className: "",
    },
    Song: {
      link: "/products/song",
      icon: null,
      newTab: false,
      className: "",
    },
  },
  Discovery: {
    Arranger: {
      icon: "githubGrey",
      newTab: true,
      className: "",
      link: "https://github.com/overture-stack/arranger",
    },
    OncoJS: {
      link: "https://github.com/oncojs",
      icon: "githubGrey",
      newTab: true,
      className: "",
    }
  },
  Analysis: {
    Jukebox: {
      link: "/products/jukebox",
      newTab: false,
      className: "",
    },
    JTracker: {
      link: "https://github.com/jtracker-io",
      icon: "githubGrey",
      newTab: true,
      className: "",
    }
  },
  Social: {
    Persona: {
      icon: "githubGrey",
      newTab: true,
      className: "",
      link: "https://github.com/overture-stack/persona",
    },
    Riff: {
      link: "/products/riff",
      newTab: false,
      className: "",
    }
  },
  Management: {
    "Billing & Usage": {
      link: "https://github.com/CancerCollaboratory/billing",
      icon: "githubGrey",
      newTab: true,
      className: "",
    },
    Enrolment: {
      link: "https://github.com/overture-stack/enrolment",
      icon: "githubGrey",
      newTab: true,
      className: "",
    }
  },
  About: {
    "Our Vision": {
      link: "/our-vision",
      icon: null,
      newTab: false,
      className: "",
    },
    "Services": {
      link: "/services",
      icon: null,
      newTab: false,
      className: "",
    },
    Blog: {
      link: "http://softeng.oicr.on.ca/",
      icon: null,
      newTab: true,
      className: "",
    },
    Contact: {
      link: "/contact",
      icon: null,
      newTab: false,
      className: "",
    }
  }
};

const FooterLinks = () => {
  return (
    <div className="columns is-mobile footer-links flex-auto flex-wrap">
      {Object.keys(links).map((v, i) => {
        return (
          <section className="column is-2-desktop is-4-tablet is-half-mobile flex-wrap" key={v}>
            <div className="link-group-header">{v}</div>
            <ul className="list-reset">
              {Object.keys(links[v]).map((y, i) => {
                let footerLink = links[v][y]["link"];
                let linkIcon = links[v][y]["icon"];
                let linkTarget = links[v][y]["newTab"] === true ? "_blank" : "_self" 
                return (
                  <li key={y}>
                    <a className="link" target={linkTarget} href={footerLink}>
                      <span className="pr1">{y}</span>
                      {linkIcon && <Icon img={linkIcon} />}
                    </a>{" "}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footer-box">
          <a className="oicr-logo" target="_blank" href="http://oicr.on.ca">
            <img src={logo} style={{maxHeight: "100px", paddingRight: "32px"}} />
          </a>
          <FooterLinks />
        </div>
      </div>
      <div className="flex justify-center bg-grey p2">
        <span className="px2 copyright">© 2018 Overture.</span>
        <a className="px1" href="/privacy">Privacy</a>
        <span className="px1">|</span>
        <a className="px1" href="/terms-conditions">Terms & Conditions</a>
      </div>
    </footer>
  );
};


export default Footer;
