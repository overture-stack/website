/**
 * Created  on 31/3/18
 */
import React from 'react'
import { Link } from 'gatsby-link'

const links = {
  Core: {
    Ego: '/products/ego',
    Score: '/products/score',
    Song: '/products/song',
    Indexer: '#',
  },
  Discovery: {
    Jupyter: '#',
    JTracker: '#',
  },
  Analysis: {
    Persona: '#',
    Riff: '#',
  },
  Social: {
    Persona: '#',
    Riff: '#',
  },
  Management: {
    'Billing & Usage': '#',
    Enrolment: '#',
  },
  About: {
    'Case Studies': '#',
    Servies: '#',
  },
}

const FooterLinks = () => {
  return (
    <div className="columns">
      {Object.keys(links).map((v, i) => {
        return (
          <section className="column is-2" key={v}>
            <div className="bold h4">{v}</div>
            <ul className="list-reset">
              {Object.keys(links[v]).map((y, i) => {
                return (
                  <li className="h5" key={y}>
                    <a href={links[v][y]}>{y}</a>{' '}
                    {/* TODO change this to a gatsby link */}
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <FooterLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
