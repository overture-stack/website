/**
 * Created  on 31/3/18
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
      icon: null
    },
    Score: {
      link: "/products/score",
      icon: null
    },
    Song: {
      link: "/products/song",
      icon: null
    }
    //   Indexer: {
    //     link: "#",
    //     icon: null,
    //   }
  },
  Discovery: {
    Arranger: {
      icon: "githubGrey",
      link: "https://github.com/overture-stack/arranger",
    },
    OncoJS: {
      link: "https://github.com/oncojs",
      icon: "githubGrey",
    }
  },
  Analysis: {
    Jukebox: {
      link: "#",
    },
    JTracker: {
      link: "https://github.com/jtracker-io",
      icon: "githubGrey",
    }
  },
  Social: {
    Persona: {
      icon: "githubGrey",
      link: "https://github.com/overture-stack/persona",
    },
    Riff: {
      link: "https://github.com/overture-stack/riff",
      icon: "githubGrey",
    }
  },
  Management: {
    "Billing & Usage": {
      link: "https://github.com/CancerCollaboratory/billing",
      icon: "githubGrey",
    },
    Enrolment: {
      link: "https://github.com/overture-stack/enrolment",
      icon: "githubGrey",
    }
  },
  About: {
    "Services": {
      link: "#",
      icon: null,
    },
    Blog: {
      link: "http://softeng.oicr.on.ca/",
      icon: null,
    },
    Contact: {
      link: "#",
      icon: null,
    }
  }
};

const FooterLinks = () => {
  return (
    <div className="flex justify-around flex-auto">
      {Object.keys(links).map((v, i) => {
        return (
          <section className="flex flex-column" key={v}>
            <div className="link-group-header">{v}</div>
            <ul className="list-reset">
              {Object.keys(links[v]).map((y, i) => {
                let footerLink = links[v][y]["link"];
                let linkIcon = links[v][y]["icon"];
                return (
                  <li key={y}>
                    <a className="link" href={footerLink}>
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
        <div className="flex">
          <img src={logo} style={{maxHeight: "100px", paddingRight: "32px"}} />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
