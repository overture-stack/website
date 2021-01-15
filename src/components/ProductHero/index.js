import React from 'react';
import { Badge, Button, ProgressBar } from 'components';
import './styles.scss';
import bg from './bg_blue_curved.svg'; // used in css
import logoScore from './images/score.svg';
import logoSong from './images/song.svg';
import logoEgo from './images/ego.svg';
import logoOncojs from './images/oncojs.svg';
import logoJukebox from './images/jukebox.svg';
import logoMaestro from './images/maestro.svg';
import logoArranger from './images/arranger.svg';
import logoRiff from './images/riff.svg';
import logoPersona from './images/persona.svg';

const logos = {
  logoScore,
  logoSong,
  logoJukebox,
  logoEgo,
  logoMaestro,
  logoOncojs,
  logoPersona,
  logoRiff,
  logoArranger,
};

const HeroCard = ({ cardText, getStartedLink, logo }) => (
  <div className="container mt3 mb2">
    <div className="HeroCard card column">
      <div className="columns">
        {/* Left Column */}
        <div className="card-content is-two-thirds flex flex-column justify-center">
          <div className="card-text">{cardText}</div>
          <div className="left-align">
            <Button link={getStartedLink} icon="githubWhite" size="medium" type="primary">
              Get Started
            </Button>

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

const ProductHero = ({ title, subTitle, cardText, logo, getStartedLink, badge, progressType }) => (
  <div className="ProductHero">
    <section className="hero hero-gradient py1">
      <div className="hero-body has-text-centered">
        <div className="has-text-centered">
          {/* Title, Badge, Subtitle */}
          <div className="hero-title-box">
            <span className="hero-title-and-tag ">
              <h1 className="title mb1">{title}</h1>
              <Badge color={badge.color}>{badge.text}</Badge>
            </span>
            <h2 className="subtitle py1">{subTitle}</h2>
          </div>

          <ProgressBar type={progressType} />

          <HeroCard getStartedLink={getStartedLink} cardText={cardText} logo={logo} />
        </div>
      </div>
    </section>
  </div>
);

export default ProductHero;
