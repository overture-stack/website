/**
 * Created  on 31/3/18
 */
import React from 'react'
import { Link } from 'gatsby-link'
import './styles.scss'
import logo from './logo.svg'

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
    <div className="flex justify-around flex-auto">
      {Object.keys(links).map((v, i) => {
        return (
          <section className="flex flex-column" key={v}>
            <div className="link-group-header">{v}</div>
            <ul className="list-reset">
              {Object.keys(links[v]).map((y, i) => {
                return (
                  <li key={y}>
                    <a className="link" href={links[v][y]}>{y}</a>{' '}
                    {/* TODO change this to a gatsby link ? */}
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
    <footer className="Footer">
      <div className="container">
        <div className="flex">
          <img src={logo}/>
          <FooterLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
