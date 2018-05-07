import React from 'react'
import './styles.scss'
import Badge from "../Badge/index";
import bg from './bg_blue_curved.svg' // used in css
import logoScore from './images/score.png'
import logoSong from './images/song.png'
import logoEgo from './images/ego.png'

const logos = {
  logoScore,
  logoSong,
  logoEgo,
}


const HeroCard = ({ cardText, logo }) => (
  <div className="container my3">
    <div className="card column is-10 is-offset-1">
      <div className="columns">
        {/* Left Column */}
        <div className="card-content is-two-thirds flex flex-column justify-center">
          {/* TODO font colour */}
          <div className="content h2 bold left-align">{cardText}</div>
          <div className="left-align">
            <button className="button is-primary is-medium mr2">
              Get Started
            </button>
            <button className="button is-primary is-medium">
              Download Core
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="column is-one-third card-img-box">
          <img className="card-img" src={logos[logo]} />
        </div>
      </div>
    </div>
  </div>
)

const ProductHero = ({ title, subTitle, cardText, logo, getStartedLink }) => (
  <div className="ProductHero">
    <section className="hero hero-gradient py3">
      <div className="hero-body has-text-centered">
        <div className="has-text-centered">
          <span className="flex justify-center">
          <h1 className="title">{title}</h1>
          <Badge color="pink" className="ml1 mt3" >Core</Badge>
          </span>
          <h2 className="subtitle py3">{subTitle}</h2>
          <HeroCard cardText={cardText} logo={logo} />
        </div>
      </div>
    </section>
  </div>
)

export default ProductHero
