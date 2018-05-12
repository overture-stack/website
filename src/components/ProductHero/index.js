import Icon from "../Icon/index";
import React from "react";
import "./styles.scss";
import Badge from "../Badge/index";
import bg from "./bg_blue_curved.svg"; // used in css
import logoScore from "./images/score.svg";
import logoSong from "./images/song.svg";
import logoEgo from "./images/ego.svg";
import logoJukebox from "./images/jukebox.svg";

const logos = {
  logoScore,
  logoSong,
  logoJukebox,
  logoEgo
};

const HeroCard = ({ cardText, getStartedLink, logo }) => (
  <div className="container my3">
    <div className="card column">
      <div className="columns">
        {/* Left Column */}
        <div className="card-content is-two-thirds flex flex-column justify-center">
          <div className="card-text">{cardText}</div>
          <div className="left-align">
            <a
              className="button is-primary is-medium"
              target="_blank"
              href={getStartedLink}
            >
              <Icon className="pr2" img="githubWhite" />
              Get Started
            </a>

            {/* Hiding for now

            <button className="button is-primary is-medium">
              Download Core
            </button>

              */}
          </div>
        </div>

        {/* Right Column */}
        <div className="column is-one-third card-img-box">
          <img className={`card-img ${logo}`} src={logos[logo]} />
        </div>
      </div>
    </div>
  </div>
);

const ProductHero = ({ title, subTitle, cardText, logo, getStartedLink, badge}) => (
  <div className="ProductHero">
    <section className="hero hero-gradient py1">
      <div className="hero-body has-text-centered">
        <div className="has-text-centered">
          <span className="flex justify-center">
            <h1 className="title">{title}</h1>
            <Badge color={badge.color} className="ml1 mt3">
              {badge.text}
            </Badge>
          </span>
          <h2 className="subtitle py1">{subTitle}</h2>
          <HeroCard
            getStartedLink={getStartedLink}
            cardText={cardText}
            logo={logo}
          />
        </div>
      </div>
    </section>
  </div>
);

export default ProductHero;
